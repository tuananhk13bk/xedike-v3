import db from "../config/database";
import _ from "lodash";
import bcrypt from "bcryptjs";
import camelcaseKeys from "camelcase-keys";

interface ICheckExists {
  username?: string;
  email?: string;
  phone?: string;
}

class User {
  private username: string;
  private email: string;
  private phone: string;
  private password: string;

  constructor(userProps: {
    username: string;
    email?: string;
    phone: string;
    password: string;
  }) {
    this.username = userProps.username;
    this.email = userProps.email;
    this.phone = userProps.phone;
    this.password = userProps.password;
  }

  public register(): Promise<{
    registerSuccess: boolean;
    user: {
      username: string;
      phone: string;
    };
  }> {
    const { username, phone, password } = this;
    return new Promise((resolve, reject) => {
      db.execute(
        `
					INSERT INTO 
					user (username, phone, password, register_datetime, is_activated) 
					VALUES (?, ?, ?, now(), TRUE)
				`,
        [username, phone, password]
      )
        .then((res: { [key: string]: any }) =>
          resolve({
            registerSuccess: true,
            user: {
              username,
              phone
            }
          })
        )
        .catch((err: any) => {
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

  async changePassword(
    userId: number,
    currentPassword: string,
    newPassword: string
  ): Promise<{ success: boolean; clientErrors: { [key: string]: string } }> {
    let result: {
      success: boolean;
      clientErrors: {
        [key: string]: string;
      };
    } = { success: false, clientErrors: {} };
    try {
      const hashedPassword = await db.execute(
        "SELECT password FROM user WHERE id = ?",
        [userId]
      );
      const isMatch = await User.comparePassword(
        currentPassword,
        hashedPassword
      );

      if (!isMatch) {
        result.clientErrors.password = "Password incorrect";
        return result;
      }

      return result;
    } catch (error) {
      throw error;
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
    let queryParams: Array<string> = [];
    if (email) {
      queryString = `SELECT email FROM user WHERE email = ?`;
      queryParams = [email];
    } else if (phone) {
      queryString = `SELECT phone FROM user WHERE phone = ?`;
      queryParams = [phone];
    } else if (username) {
      queryString = `SELECT username FROM user WHERE username = ?`;
      queryParams = [username];
    }

    try {
      const queryData = await db.execute(queryString, queryParams);
      const foundUser = queryData[0][0];
      if (_.get(foundUser, "username") === username) {
        result.clientErrors.username = "Username is existed";
      }
      if (_.get(foundUser, "email") === email) {
        result.clientErrors.email = "Email is existed";
      }
      if (_.get(foundUser, "phone") === phone) {
        result.clientErrors.phone = "Phone number is existed";
      }
      result.user = foundUser ? camelcaseKeys(foundUser) : {};
      if (!_.isEmpty(result.user)) {
        result.isExisted = true;
      }
      return result;
    } catch (error) {
      throw error;
    }
  }

  static find() {}

  static findById(id: number | string) {
    return new Promise((resolve, reject) => {
      db.execute(
        "SELECT id, username, email, phone, password FROM user WHERE id = ?",
        [id]
      )
        .then((res: any) => {
          resolve(camelcaseKeys(res[0][0]));
        })
        .catch((err: any) => reject(err));
    });
  }
}

export default User;
