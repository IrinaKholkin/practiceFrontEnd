import { Error, useFormik } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../Button/Button";
import Input from "../Input/Input";
import { LoginFormComponent, Title } from "./styles";
import { LoginFormValues } from "./types";
import Spinner from "../Spinner/Spinner";
import { UserContext } from "../Layout/Layout";



function LoginForm() {
  const {error, isLoading, getUser, user} = useContext(UserContext)

  const navigate = useNavigate();

  const getUserAndredirect = ()=>{
    getUser()
    navigate('/user_data')
  }

  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Field email is requered")
      .email("Field has type email (@ и т.д.)")
      .max(40, "Max 40 symbols")
      .min(12, "Min 12 symbols"),
    password: Yup.string()
      .typeError("Password must be a number")
      .required("Field password is requered")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Пароль должен содержать min 8 символов (заглавная буква, строчная, цифра, спецсимвол)"
      ),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    } as LoginFormValues,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (values: LoginFormValues) => {
      console.table(values);
    },
  });

  console.log(formik);

  return (
    <LoginFormComponent onSubmit={formik.handleSubmit}>
      <Title>Login form</Title>
      <Input
        name="email"
        label="Email *"
        id="email_id"
        placeholder="Enter your email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      />
      <Error>{error}</Error>
      <Input
        name="password"
        label="Password *"
        id="password_id"
        placeholder="Enter your password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      <Error>{error}</Error>
      <Button name="LOGIN" onClick={getUserAndredirect}/>
      {isLoading ? <Spinner /> : user}
    </LoginFormComponent>
  );
}

export default LoginForm;
