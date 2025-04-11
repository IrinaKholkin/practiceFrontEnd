import { useFormik } from "formik";
import * as Yup from 'yup'

import Button from "../Button/Button";
import Input from "../Input/Input";
import { Checkbox, ErrorMessage, CheckboxContainer, CheckboxLabel, EmployeeFormComponent, Title } from "./styles";
import { EmployeeFormValues } from "./types";

function EmployeeForm() {

  const schema = Yup.object().shape({
    full_name: Yup.string()
      .required('Поле Full Name является обязательным')
      .min(5, 'Минимум 5 символов')
      .max(50, 'Максимум 50 символов'),
    age: Yup.number().typeError('Тип значения - число')
      .required('Поле Age является обязательным')
      .min(18, 'Минимальный возраст сотрудника - 18 лет')
      .max(80, 'Максимальный возраст сотрудника - 80 лет'),
    agreement: Yup.boolean().oneOf([true], 'Accept agreement'),
    password: Yup.string()
    .required('Поле Password является обязательным')
    // метод matches принимает 2 аргумента (1-регулярное выражение, 2 - текст ошибки)
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Пароль должен содержать min 8 символов (заглавная буква, строчная, цифра, спецсимвол)'
    ),
    code:  Yup.number().typeError('Тип значения - число')
    .test('min length', 'Мin 3 символа', (value)=>String(value).length >= 3)
    .test('max length', 'Мax 8 символов', (value)=>String(value).length <= 8)
  })

  const formik = useFormik({
    initialValues: {
      full_name: '',
      age: '',
      agreement: false,
      password: '',
      code: ''
    } as EmployeeFormValues,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (values: EmployeeFormValues) => {
      console.table(values)
    }
  })
  console.log(formik);
  return (
    <EmployeeFormComponent onSubmit={formik.handleSubmit}>
      <Title>Employee form</Title>
      <Input
        name='full_name'
        label='Full Name *'
        id='full_name_id'
        placeholder="Enter your full name"
        value={formik.values.full_name}
        onChange={formik.handleChange}
        error={formik.errors.full_name}
      />
      <Input
        name='age'
        label='Age *'
        id='age_id'
        placeholder="Enter your age"
        type='number'
        value={formik.values.age}
        onChange={formik.handleChange}
        error={formik.errors.age}
      />
      <Input
        name='password'
        label='Password *'
        id='password_id'
        placeholder="Enter your password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      <Input
        name='code'
        label='Code'
        id='code_id'
        placeholder="Enter your employee code"
        value={formik.values.code}
        onChange={formik.handleChange}
        error={formik.errors.code}
      />
      <CheckboxContainer>
        <Checkbox
          name='agreement'
          type='checkbox'
          id='agree_id'
          //  Для checkbox используют атрибут checked вместо values
          checked={formik.values.agreement}
          onChange={formik.handleChange}
        />
        <CheckboxLabel htmlFor='agree_id'>
          I agree privacy and policy
        </CheckboxLabel>
      </CheckboxContainer>
      <ErrorMessage>{formik.errors.agreement}</ErrorMessage>
      <Button name='Create' />
    </EmployeeFormComponent>
  )
}

export default EmployeeForm