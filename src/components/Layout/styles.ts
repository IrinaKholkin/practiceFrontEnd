import styled from "@emotion/styled";
import { Link, NavLink } from "react-router-dom";

export const LayoutComponent = styled.div`
 display: flex;
 flex-direction: column;
 flex: 1;
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: linear-gradient(150deg, #f1042c, #03e9fa, #d108e4);   
  box-shadow: 0 4px 12px rgba(255, 255, 255, 1); 
  transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease; 
  border-bottom: 2px solid #6804eb; 
  position: relative;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 30px;
  justify-content: center;
  width: 100%;
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 22px;
  color: #f8f6f7; 
  font-weight: bold;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 30px;
  transition: color 0.3s ease, transform 0.2s ease;
  &.active {
    color: #fff;
    background-color: #5511f3; 
    box-shadow: 0 0 10px rgba(250, 250, 250, 0.932);
  }
  &:hover {
    color: #fff;
    transform: translateY(-3px); 
    background-color: #ac0bf7; 
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 10px;
  background: linear-gradient(150deg, #f1042c, #03e9fa, #d108e4);  
  color: white;
  font-size: 16px;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);
`;
 
export const MainLink = styled(Link)`
  display: block;  
  width: 100%;    
  text-align: center; 
  color: white;
  font-size: 30px;
  padding: 15px;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s ease;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 40px;
  background-color: #f9f1f2; 
  font-size: 18px;
  overflow-y: auto; 
  transition: padding 0.3s ease;
`;
export const WelcomeText = styled.div`
  font-size: 100px;
  font-weight: 700;
  background: linear-gradient(135deg, #0adfee, #eb0656);
  background-clip: text;
  color: transparent; 
  text-align: center;
`;
