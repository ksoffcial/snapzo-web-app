import Navbar from './Component/Navbar'
import Login from './Component/Login'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Explore from './Component/Explore'
import Signup from './Component/Signup'
import ContactUs from './Component/ContactUs'
import Cart from './Component/Cart'


const App = () => {
  return (
    <div>
      <Navbar />


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>







    </div>
  )
}

export default App