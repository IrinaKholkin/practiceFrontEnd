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

export const Nav = styled.nav`
 display: flex;
 gap: 15px;
`;

export const StyledNavLink = styled(NavLink)`
font-size: 24px;
color:rgb(30, 114, 122);
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
 background-color:rgb(215, 99, 119);
 color: white;
`;

export const ButtonContainer = styled.div`
 width: 50px;
`;

