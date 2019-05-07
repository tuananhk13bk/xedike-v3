import validator from "validator";

interface ILoginInput {
  username: string;
  password: string;
  password2: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  dobYear: string;
}

const validateRegisterInput = (data: ILoginInput): ILoginInput => {
  let errors: ILoginInput = {
    username: "",
    password: "",
    password2: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    dobYear: ""
  };

  if (!validator.isLength(data.username, { min: 6 })) {
    errors.username = "Ten tai khoan phai dai it nhat 6 ki tu";
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

  if (!validator.equals(data.password, data.password2)) {
    errors.password2 = "Xac nhan mat khau khong chinh xac";
  }

  if (validator.isEmpty(data.password2)) {
    errors.password2 = "Vui long nhap lai mat khau";
  }

  if (validator.isEmpty(data.firstName)) {
    errors.firstName = "Vui long nhap ten cua ban";
  }

  if (validator.isEmpty(data.lastName)) {
    errors.lastName = "Vui long nhap ho cua ban";
  }

  if (validator.isEmpty(data.phoneNumber)) {
    errors.phoneNumber = "Vui long nhap so dien thoai cua ban";
  }

  if (validator.isEmpty(data.dobYear)) {
    errors.dobYear = "Vui long nhap nam sinh cua ban";
  }

  return errors;
};

export default validateRegisterInput;
