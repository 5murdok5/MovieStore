import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Cart from '../views/cart'
import Home from '../views/Home'
import Login from '../views/Login'
import Main from '../views/Main'

const PageRoutes = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/" element={<Main />}>
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default PageRoutes
