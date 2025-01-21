import { BrowserRouter, Routes, Route } from "react-router-dom"
import CryptoHome from "./Pages.jsx/CryptoHome"
import CryptoDetail from "./Pages.jsx/CryptoDetail"
import SearchAppBar from "./Components/NavBar"


function App() {
  

  return (
    <BrowserRouter>
    <SearchAppBar/>
      <Routes>
        <Route path="/" element={<CryptoHome/>} />   
        <Route path= "/coin/:id" element={<CryptoDetail/>} />
      </Routes>
    
      </BrowserRouter>
  )
}

export default App
