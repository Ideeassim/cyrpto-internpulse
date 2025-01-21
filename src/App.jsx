import { BrowserRouter, Routes, Route } from "react-router-dom"
import CryptoHome from "./Pages.jsx/CryptoHome"
import CryptoDetail from "./Pages.jsx/CryptoDetail"
import SearchAppBar from "./Components/NavBar"
import { useState } from "react"
import SearchList from "./Components/SearchList"
import SearchDetail from "./Pages.jsx/SearchDetail"


function App() {
  const [results, setResults]= useState([])

  return (
    <BrowserRouter>
    <SearchAppBar setResults={setResults}/>
    {results && <SearchList results={results}/>}
      <Routes>
        <Route path="/" element={<CryptoHome results={results} />} />   
        <Route path= "/coin/:id" element={<CryptoDetail/>} />
        <Route path= "/coin/:id" element={<SearchDetail results={results}/>} />
      </Routes>
    
      </BrowserRouter>
  )
}

export default App
