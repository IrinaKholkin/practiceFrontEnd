import { v4 } from "uuid"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { createContext, useState } from "react"
import {  LayoutProps, NavLinkObj, UserTextInterface } from "./types"
import {LayoutComponent, Header, Nav, Main, Footer, StyledNavLink, ButtonContainer} from "./styles"
import { navLinksData } from "./data"
import Button from "../Button/Button"

const USER_DATA_URL: string = 'https://randomuser.me/api';

export const UserContext = createContext<UserTextInterface>({
  user: undefined, 
  error: undefined, 
  isLoading: false,
  getUser: ()=>{}})

function Layout({children} : LayoutProps) {
  const [user, setUser] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const getUser = async () => {
    setError(undefined)
    try {
      setIsLoading(true);
      const response = await axios.get(USER_DATA_URL)
      console.log(response.data);
      const user = response.data.result[0];
      setUser(`Привет, я ${user.name.first} ${user.name.last} из ${user.location.country}`);
    }
    catch (error: any) {
      console.log(error.message);
      setError(error.message)
    }
    finally {
      setIsLoading(false);
    }
  }
  const navLinks = navLinksData.map((navLink: NavLinkObj) => {
    return (
      <StyledNavLink key={v4()} to={navLink.to} style={
        ({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })
      }>{navLink.linkName}</StyledNavLink>
    )
  })
  return (
    <UserContext.Provider value={{ user, error, isLoading, getUser }}>
    <LayoutComponent>
      <Header>
        <Link to='/'>
        User App
        </Link>
        <Nav>
          {navLinks}
        </Nav>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <ButtonContainer>
        <Button name="Back" onClick={()=>navigate(-1)}/>
        </ButtonContainer>
      </Footer>
    </LayoutComponent>
    </UserContext.Provider>
  )
}
export default Layout;