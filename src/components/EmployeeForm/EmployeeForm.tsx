import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup"
import { FormWrapper, InputGroup, StyledError, StyledLabel, SubmitButton } from "./styles";

const validationSchema = Yup.object ({
    fullName: Yup.string()
    .required('Обязательное поле')
    .min(5, 'Минимум 5 символов')
    .max(50, 'Максимум 50 символов')
    ,
    age: Yup.number()
    .required('Обязательное поле')
    .min(18, 'Минимум 18 лет')
    .max(80, 'Максимум 80 лет')
});

const initialValues = {
    fullName: "",
    age: "",
};

function EmployeeForm() {
    const handleSubmit = (values: typeof initialValues) => {
        console.log("Данные формы", values);
    };
    return (
        <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        >
            <Form>
                <FormWrapper>
                    <InputGroup>
                    <StyledLabel htmlFor="fullName">Full Name</StyledLabel>
                    <Field type='text' id='fullName' name='fullName'/>
                    <ErrorMessage name='fullName' component={StyledError}/>
                    </InputGroup>
                    <InputGroup>
                    <StyledLabel htmlFor="age">Age</StyledLabel>
                    <Field type='number' id='age' name='age'/>
                    <ErrorMessage name='age' component={StyledError}/>
                    </InputGroup>

                    <SubmitButton type="submit">Create</SubmitButton>

                </FormWrapper>
            </Form>
            </Formik>
    );
}

export default EmployeeForm;