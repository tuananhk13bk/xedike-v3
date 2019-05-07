import validator from "validator";

interface ILoginInput {
  username: string;
  password: string;
}

const validateLoginInput = (data: ILoginInput): ILoginInput => {
  let errors: ILoginInput = {
    username: "",
    password: ""
  };

  if (!validator.isLength(data.username, { max: 30, min: 6 })) {
    errors.username = "Ten tai khoan phai co do dai tu 6 den 30 ky tu";
  }

  if (validator.isEmpty(data.username)) {
    errors.username = "Vui long nhap ten tai khoan";
  }

  if (!validator.isLength(data.password, { min: 6 })) {
    errors.password = "Mat khau phai dai it nhat 6 ki tu";
  }

  if (validator.isEmpty(data.password)) {
    errors.password = "Vui long nhap mat khau";
  }

  return errors;
};

export default validateLoginInput;
