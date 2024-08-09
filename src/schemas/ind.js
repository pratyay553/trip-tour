import * as yup from "yup";

export const signUpSchema = yup.object({
  name: yup.string().min(2).max(20).required("Please enter your name"),
  email: yup.string().email().required("Please enter your email"),
  password: yup.string().min(6).required("Please enter your password"),
  confirm_password: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "password must match"),
});
