import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './assets/components/Navbar';
import Footer from './assets/components/Footer';
import Home from './assets/components/Home';
import Register from './assets/components/Register';
import Login from './assets/components/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path = '/' element = {<Home />}></Route>
          <Route path = '/Home' element = {<Home />}></Route>
          <Route path='/Register' element={<Register />} />
          <Route path = '/login' element = {<Login />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
