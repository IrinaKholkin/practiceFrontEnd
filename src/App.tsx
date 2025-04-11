import { BrowserRouter, Routes, Route } from 'react-router-dom'


import GlobalStyles from "./styles/GlobalStyles"



function App() {

  return (
    //BrowserRouter - глобальная обёртка для всего приложения,
    // которая позволяет использовать маршрутизацию
    <BrowserRouter>
      <GlobalStyles />
      
          {/* <Route path='/homework18' element={<Homework18 />} /> */}
   
          {/* <Route path='*' element={<PageNotFound />} /> */}
      
    </BrowserRouter>
  )
}

export default App