import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const LayoutComponent = styled.div`
 display: flex;
 flex-direction: column;
 flex: 1;
`;
export const Header = styled.header`
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 20px;
 background-color: #F5B0BC;
`;

export const LogoImage = styled.img`
width: 60px;
border-radius: 50%;
`;

export const Nav = styled.nav`
 display: flex;
 gap: 15px;
`;

export const StyledNavLink = styled(NavLink)`
font-size: 24px;
color:rgb(122, 30, 45);
font-weight: bold;
text-decoration: none;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
export const Footer = styled.footer`
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 30px;
 padding: 20px;
 background-color: #8a1e30;
 color: white;
`;

export const ButtonContainer = styled.div`
 width: 50px;
`;
export const LogoText = styled.div`
  font-size: 28px;
  font-weight: bold;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
`;

