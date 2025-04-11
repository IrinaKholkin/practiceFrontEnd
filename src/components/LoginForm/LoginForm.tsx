//Импортируем хук useFormik из библиотеки formik
import { useFormik } from "formik";
import * as Yup from 'yup'

import Button from "../Button/Button";
import Input from "../Input/Input";
import { LoginFormComponent, Title } from "./styles";
import { LoginFormValues } from "./types";

function LoginForm() {

    // Создание валидационной схемы
    const schema = Yup.object().shape({
      email: Yup.string()
        .required('Field email is requered')
        .email('Field has type email (@ и т.д.)')
        .max(25, 'Max 25 symbols')
        .min(15, 'Min 15 symbols'),
      password: Yup.number()
        .typeError('Password must be a number')
        .required('Field password is requered')
        .max(255, 'Max 255')
        .min(15, 'Min 15')
    })
  
    //Настройка формы. При вызове useFormik в него нужно передать аргумент
    // аргумент - объект, с на данными (настройкой) определённой формы.
    //При вызове useFormik, возвращается объект, в котором храняться значения полей, ошибки
    // разлтчные методы для работы с формой
    const formik = useFormik({
      //в объекте настройки 2 обязательных свойства
      //initialValues - объект, в котором ключами являются значения атрибутов name полей
      initialValues: {
        email: '',
        password: ''
      } as LoginFormValues,
      // validationSchema - свойство, в значение которого добавляют
      // ранее созданную валидационную схему (через Yup)
      validationSchema: schema,
      validateOnChange: false,
      // validateOnMount: true,
      //onSubmit - функция, которая будет вызвана, когда произойдёт событие submit для формы
      onSubmit: (values: LoginFormValues) => {
        console.table(values);
      }
    })
  
    console.log(formik);
  
    return (
      //Для выполнения функции, которая прописана в свойстве onSubmit (в настройке useFormik)
      //в элемент формы (LoginFormComponent) необходимо передать formik.handleSubmit
      <LoginFormComponent onSubmit={formik.handleSubmit}>
        <Title>Login form</Title>
        {/* Для контроля элементов формы необходимо передать значения в
        prop value и onChange 
        для value - {formik.values.name} (name - точное название элемента)
        для onChange - одинаковый для всех элементов {formik.handleChange}
        */}
        <Input
          name='email'
          label='Email *'
          id='email_id'
          placeholder="Enter your email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email}
        />
        {/* <Error></Error> */}
        <Input
          name='password'
          label='Password *'
          id='password_id'
          placeholder="Enter your password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password}
        />
        {/* <Error></Error> */}
        <Button name='LOGIN' />
      </LoginFormComponent>
    )
  }
  
  export default LoginForm