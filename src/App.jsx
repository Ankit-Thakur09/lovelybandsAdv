import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import './App.css'
// import Lanyard from "./pages/lanyard/Lanyard"
import Custom from "./pages/custom/Custom"
import Footer from "./components/Footer/Footer"
import { BrowserRouter, Routes,Route } from "react-router-dom"


function App() {
  return (
    <>
      <BrowserRouter>
    <Navbar/>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/custom-lanyard" element={<Custom />} />
        </Routes>
      
      <Footer/>
        </BrowserRouter>
    </>
  )
}

export default App