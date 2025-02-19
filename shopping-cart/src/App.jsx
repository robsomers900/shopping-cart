import { useState } from 'react'
import './App.css'
import Home from './home'
import {Link, Outlet} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='topbar'>
        <ul>
          <li>
            <Link to="cart">Cart</Link>
          </li>
        </ul>
      </div>
      <div className='sidebar'>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="cart">Cart</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className='main-body'>
        <Outlet />
      </div>
    </>
  )
}

export default App
