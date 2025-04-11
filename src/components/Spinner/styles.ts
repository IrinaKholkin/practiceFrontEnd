import styled from "@emotion/styled";

export const SpinnerComponent = styled.div`
width: 50px;
height: 50px;
border-radius: 50%;
border: 4px solid rgba(0,0,0,0.1);
border-left-color: rgb(55, 47, 211);
animation: spin 1s linear infinite;

@keyframes spin {
    to{
        transform: rotate(360deg)
    }
}
`