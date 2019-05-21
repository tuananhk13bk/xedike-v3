import validator from "validator";
import * as _ from "lodash";

interface ILoginInput {
  username?: string;
  password?: string;
  password2?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  dateOfBirth?: string;
}

const validateRegisterInput = (
  data: ILoginInput,
  triggerField: string
): string => {
  // let errors: ILoginInput = {
  //   username: "",
  //   password: "",
  //   password2: "",
  //   firstName: "",
  //   lastName: "",
  //   phone: "",
  //   dateOfBirth: ""
  // };
  let error: string = "";
  if (triggerField === "username") {
    if (!validator.isLength(data.username, { min: 6 })) {
      error = "Username contain at least 6 characters";
      return error;
    }
  }

  if (triggerField === "password") {
    if (!validator.isLength(data.password, { min: 6 })) {
      error = "Password contain at least 6 characters";
      return error;
    }
  }

  if (triggerField === "password2") {
    if (!validator.equals(data.password, data.password2)) {
      error = "Confirm password not correct";
      return error;
    }
  }

  if (triggerField === "firstName") {
    if (validator.isEmpty(data.firstName)) {
      error = "First name is required";
      return error;
    }
  }

  if (triggerField === "lastName") {
    if (validator.isEmpty(data.lastName)) {
      error = "Last name is required";
      return error;
    }
  }

  if (triggerField === "phone") {
    if (validator.isEmpty(data.phone)) {
      error = "Phone number is required";
      return error;
    }
  }

  if (triggerField === "dateOfBirth") {
    if (validator.isEmpty(data.dateOfBirth)) {
      error = "Date of birth is required";
      return error;
    }
  }
  // console.log(data);
  // data.username = !_.isEmpty(data.username) ? data.username : "";
  // data.password = !_.isEmpty(data.password) ? data.password : "";
  // data.password2 = !_.isEmpty(data.password2) ? data.password2 : "";
  // data.firstName = !_.isEmpty(data.firstName) ? data.firstName : "";
  // data.lastName = !_.isEmpty(data.lastName) ? data.lastName : "";
  // data.phone = !_.isEmpty(data.phone) ? data.phone : "";
  // data.dateOfBirth = !_.isEmpty(data.dateOfBirth) ? data.dateOfBirth : "";

  // if (data.username) {
  //   if (!validator.isLength(data.username, { min: 6 })) {
  //     errors.username = "Ten tai khoan phai dai it nhat 6 ki tu";
  //   }
  // }

  // if (!validator.isLength(data.password, { min: 6 })) {
  //   errors.password = "Mat khau phai dai it nhat 6 ki tu";
  // }

  // if (!validator.equals(data.password, data.password2)) {
  //   errors.password2 = "Xac nhan mat khau khong chinh xac";
  // }
};

export default validateRegisterInput;
