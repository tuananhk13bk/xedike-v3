import validator from "validator";

interface ILoginInput {
  username: string;
  password: string;
}

const validateLoginInput = (data: ILoginInput): string => {
  let errors: string = "";

  if (validator.isEmpty(data.username)) {
    errors = "Incorrect username or password";
  }

  if (validator.isEmpty(data.password)) {
    errors = "Incorrect username or password";
  }

  return errors;
};

export default validateLoginInput;
