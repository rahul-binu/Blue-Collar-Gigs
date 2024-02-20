import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';


import Navbar from './assets/components/Navbar';
import Footer from './assets/components/Footer';
import Home from './assets/components/Home';
import Register from './assets/components/Register';
import Login from './assets/components/Login';
import Profile from './assets/components/Profile';
import NewJobPost from './assets/components/NewJobPost';
import WorkCreation from './assets/components/WorkCreation';
import Skill from './assets/components/profile/Skill';
import Service from './assets/components/Services';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/Register' element={<Register />} />
          <Route path='/login' element={<Login />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/postnewwork' element={<NewJobPost />}></Route>
          <Route path='/creatework' element={<WorkCreation />}></Route>
          <Route path='/skill' element ={<Skill />} ></Route>
          <Route path='/service' element={<Service />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
