import { BrowserRouter, Routes, Route } from 'react-router-dom'


import GlobalStyles from "./styles/GlobalStyles"



function App() {

  return (
    //BrowserRouter - глобальная обёртка для всего приложения,
    // которая позволяет использовать маршрутизацию
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
      {/* <Route path='/' element={<LoginForm />}/>
      <Route path='/user_data' element={<UserData />}/> */}
      {/* <Route path='*' element={<PageNotFound />} */}
      </Routes>
    </BrowserRouter>
  )
}

export default App