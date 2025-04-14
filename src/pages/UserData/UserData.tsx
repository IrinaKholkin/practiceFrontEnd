import { useContext } from "react";
import { UserDataContext } from "../../components/Layout/Layout";
import { UserDataWrapper, UserCard, UserInfo, UserName, Avatar, ErrorWrapper, ErrorImage, ErrorTitle, LinkButton } from "./styles";
import Spinner from "../../components/Spinner/Spinner";
import { Link } from "react-router-dom";
function UserData() {
    const {
        user,
        name,
        email,
        city,
        country,
        phone,
        avatar,
        isLoading,
        error
    } = useContext(UserDataContext);

    return (
        <UserDataWrapper>{isLoading ? (<Spinner />) : user ? (
            <UserCard><UserName> Name: {name}</UserName>
                {avatar && <Avatar src={avatar} alt="User avatar" />}
                <UserInfo>Имя: {user}</UserInfo>
                <UserInfo>Email: {email}</UserInfo>
                <UserInfo>Город: {city}</UserInfo>
                <UserInfo>Страна: {country}</UserInfo>
                <UserInfo>Телефон: {phone}</UserInfo>
                <LinkButton to="/login_form">🔐 Back to Login</LinkButton>
                <LinkButton to="/">🏠 Go to Home</LinkButton>
            </UserCard>
        ) : (
            <ErrorWrapper>
                <ErrorImage src="https://media.giphy.com/media/SKGo6OYe24EBG/giphy.gif" alt="Ninja Turtle breaking stuff" />
                <ErrorTitle>Oops! Something broke{error}</ErrorTitle>
            </ErrorWrapper>
        )}
            <Link to="/layout"></Link>
        </UserDataWrapper>
    );
}
export default UserData;