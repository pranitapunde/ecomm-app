import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Footer from "./components/Footer"
import UperFooter from './components/UperFooter'
import CategoryProducts from './pages/CategoryProducts'
import { ProductProvider } from './context/product/ProductContext'
import Login from './components/Login'
import SingUp from './components/SingUp'
import Register from './components/Register';



const App = () => {
  return (
    <>
      <Router>
        <ProductProvider>
          <Navbar/>

          <Routes>
            <Route path="/"element={<Home />} />
            <Route path="/cart"element={<Cart />} />
            <Route path="/:category"element={<CategoryProducts/>} />
            <Route path= "/login" element={ <Login/>}/>
            <Route path="/signup" element= {<SingUp/>}/>
            <Route path='/register' element={<Register/>}/>
            
          </Routes>
          
          <UperFooter/>
          <Footer />
          <ToastContainer/>
          


        </ProductProvider>

      </Router>

    </>
  )
}

export default App
