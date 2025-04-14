import {useFormik } from "formik";
import * as Yup from "yup";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { LoginFormComponent, Title, SubmitError } from "./styles";
import { UserDataContext } from "../../components/Layout/Layout";

function LoginForm() {
  const { getUser } = useContext(UserDataContext);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Field email is requered")
      .email("Field has type email (@ и т.д.)")
      .max(40, "Max 40 symbols")
      .min(12, "Min 12 symbols"),
    password: Yup.string()
      .required("Field password is requered")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Пароль должен содержать min 8 символов (заглавная буква, строчная, цифра, спецсимвол)"
      ),
  });

    const formik = useFormik({
      initialValues: {
        email: '',
        password: ''
      },
      validationSchema: schema,
      validateOnChange: false,
      onSubmit: () => {
        setSubmitError(null);
        try {
          getUser();
          navigate('/user_data');
        } catch (error) {
          setSubmitError("Login failed. Try again.");
          console.error(error);
        }
      }
    });

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
      <Input
        name="password"
        label="Password *"
        id="password_id"
        placeholder="Enter your password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      {submitError && <SubmitError>{submitError}</SubmitError>}
      <Button name='Login' type='submit'/>
    </LoginFormComponent>
  );
}

export default LoginForm;
