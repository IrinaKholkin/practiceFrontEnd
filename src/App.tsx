import { BrowserRouter, Routes, Route } from 'react-router-dom'


import GlobalStyles from "./styles/GlobalStyles"
import LoginForm from './pages/LoginForm/LoginForm'
import UserData from './pages/UserData/UserData'
import Layout from './components/Layout/Layout'



function App() {

  return (
    //BrowserRouter - глобальная обёртка для всего приложения,
    // которая позволяет использовать маршрутизацию
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
      <Routes>
      <Route path='/login_form' element={<LoginForm />}/>
      <Route path='/user_data' element={<UserData />}/> 
      </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App