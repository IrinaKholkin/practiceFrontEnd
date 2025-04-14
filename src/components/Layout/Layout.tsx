import { Link } from "react-router-dom";

import { useState } from "react";
import axios from "axios";
import { navLinksData } from './data';
import { NavLinkObj, UserTextInterface, LayoutProps } from "./types";
import { v4 } from "uuid";
import React from "react";
import { Footer, Header, LayoutComponent, Main, MainLink, Nav, StyledNavLink, WelcomeText } from "./styles";

// eslint-disable-next-line react-refresh/only-export-components
export const UserDataContext = React.createContext<UserTextInterface>({
  user: undefined,
  name: undefined,
  email: undefined,
  city: undefined,
  country: undefined,
  phone: undefined,
  avatar: undefined,
  error: undefined,
  isLoading: false,
  getUser: () => { },
});

function Layout({ children }: LayoutProps) {
  const [userData, setUserData] = useState<UserTextInterface>({
    user: undefined,
    name: undefined,
    email: undefined,
    city: undefined,
    country: undefined,
    phone: undefined,
    avatar: undefined,
    error: undefined,
    isLoading: false,
    getUser: () => {},
  });
  const USER_URL: string = 'https://randomuser.me/api/';

  const getUser = async () => {
    setUserData(prev => ({ ...prev, error: undefined, isLoading: true }));
    try {
      const response = await axios.get(USER_URL);
      const data = response.data.results[0];
      setUserData({
        user: `${data.name.first} ${data.name.last}`,
        name: data.name.first,
        email: data.email,
        city: data.location.city,
        country: data.location.country,
        phone: data.phone,
        avatar: data.picture.large,
        error: undefined,
        isLoading: false,
        getUser,
      });
    } catch (error: unknown) {
      setUserData(prev => ({
        ...prev,
        error: error instanceof Error ? error.message : 'Unexpected error',
        isLoading: false,
        getUser,
      }));
    }
  };
  const navLinks = navLinksData.map((navLink: NavLinkObj) => (
    <StyledNavLink
      key={v4()}
      to={navLink.to}
      style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}
    >
      {navLink.linkName}
    </StyledNavLink>
  ));
  return (
    <UserDataContext.Provider value={{ ...userData, getUser }}>
      <LayoutComponent>
        <Header>
          <Link to="/"></Link>
          <Nav>{navLinks}</Nav>
        </Header>
        <Main><WelcomeText>Welcome to Our Website!</WelcomeText>{children}</Main>
        <Footer>
          <MainLink to="/layout">Go to Page</MainLink>
        </Footer>
      </LayoutComponent>
    </UserDataContext.Provider>
  );
}
export default Layout;