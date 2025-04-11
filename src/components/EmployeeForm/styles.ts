import styled from "@emotion/styled";

export const FormWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
width: 300px;
padding: 30px;
border: 1px solid #ccc;
border-radius: 10px;
background-color: #f9f9f9;
`;

export const InputGroup = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
`;

export const StyledLabel = styled.label`
font-weight: bold;
`;

export const StyledError = styled.div`
color: red;
font-size: 14px;
`;

export const SubmitButton = styled.button`
padding: 10px;
font-size: 16px;
color: white;
border: none;
background-color: #1976b2;
border-radius: 5px;
cursor: pointer;

&:hover {
    background-color: #115293;
}
`;

