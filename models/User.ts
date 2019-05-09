import db from "../config/database";
import * as _ from "lodash";
import * as bcrypt from "bcryptjs";
import * as camelcaseKeys from "camelcase-keys";
interface IUser {
  register: () => Promise<{
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    phone: string;
    dateOfBirth: string;
  }>;
  hashPassword: () => Promise<boolean>;
}

interface ICheckExists {
  username?: string;
  email?: string;
  phone?: string;
}

class User implements IUser {
  private username: string;
  private password: string;
  private firstName: string;
  private lastName: string;
  private phone: string;
  private dateOfBirth: string;

  constructor(
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    phone: string,
    dateOfBirth: string
  ) {
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.dateOfBirth = dateOfBirth;
  }

  public register(): Promise<{
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    phone: string;
    dateOfBirth: string;
  }> {
    const {
      username,
      password,
      firstName,
      lastName,
      phone,
      dateOfBirth
    } = this;
    return new Promise((resolve, reject) => {
      db.execute(
        `
					INSERT INTO 
					user (username, user_password, first_name, last_name, phone, date_of_birth) 
					VALUES (?, ?, ?, ?, ?, ?)
				`,
        [username, password, firstName, lastName, phone, dateOfBirth]
      )
        .then(res =>
          resolve({
            username,
            password,
            firstName,
            lastName,
            phone,
            dateOfBirth
          })
        )
        .catch(err => {
          reject(err);
        });
    });
  }

  public hashPassword(): Promise<boolean> {
    let isHashed = false;
    return new Promise((resolve, reject) => {
      bcrypt
        .genSalt(10)
        .then(salt => {
          return bcrypt.hash(this.password, salt);
        })
        .then(hash => {
          this.password = hash;
          isHashed = true;
          resolve(isHashed);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  static async comparePassword(
    rawPassword: string,
    hashedPassword: string
  ): Promise<boolean> {
    try {
      const isMatch = await bcrypt.compare(rawPassword, hashedPassword);
      return isMatch;
    } catch (err) {
      throw err;
    }
  }

  static async checkExists(
    valuesToCheck: ICheckExists
  ): Promise<{
    isExisted: boolean;
    user: { [key: string]: any };
    clientErrors: { [key: string]: string };
  }> {
    const { username, email, phone } = valuesToCheck;
    let result: {
      isExisted: boolean;
      user: { [key: string]: any };
      clientErrors: { [key: string]: string };
    } = { isExisted: false, user: {}, clientErrors: {} };
    let queryString: string;
    let queryParams = [];
    if (email) {
      queryString = `SELECT * FROM user WHERE email = ?`;
      queryParams = [email];
    } else if (phone) {
      queryString = `SELECT * FROM user WHERE phone = ?`;
      queryParams = [phone];
    } else if (username) {
      queryString = `SELECT * FROM user WHERE username = ?`;
      queryParams = [username];
    }

    try {
      const queryData = await db.execute(queryString, queryParams);
      const foundUser = queryData[0][0];
      if (foundUser.username === username) {
        result.clientErrors.username = "Username is existed";
      }
      if (foundUser.email === email) {
        result.clientErrors.email = "Email is existed";
      }
      if (foundUser.phone === phone) {
        result.clientErrors.phone = "Phone number is existed";
      }
      result.user = camelcaseKeys(foundUser);
      if (!_.isEmpty(result.user)) {
        result.isExisted = true;
      }
      return result;
    } catch (error) {
      throw error;
    }
  }

  static find() {}

  static findById(id) {}
}

export default User;
