
import { Link, Route, Routes } from 'react-router-dom'

import './App.css'
import About from './Pages/About'
import Home from './Pages/Home'
import MenuComponent from './Pages/MenuComponent'
import User from './Pages/User'

function App() {

  let num=7;

  return (
    <>
      <div>
        <Link to="/">Home</Link> |
        <Link to="/about">About</Link> |
        <Link to={"/menu/" + num}>Menu</Link>
      </div>

      Begin
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu/:userId" element={<MenuComponent />} />
        <Route path="/user" element={<User />} />
      </Routes>
      End
    </>
  )
}

export default App
