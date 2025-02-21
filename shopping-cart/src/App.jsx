import { useState } from 'react'
import './App.css'
import Home from './home'
import {Link, Outlet} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)
  const [order, setOrder] = useState([])
  const [cards, setCards] = useState([
    {
        item: "kettle",
        name: "Kettle",
        description: "Boils Water",
        price: 10,
        quantity: 0
    },
    {
        item: "toaster",
        name: "Toaster",
        description: "Cooks Bread",
        price: 15,
        quantity: 0
    }
])

  return (
    <>
      <div className='topbar'>
        <ul>
          <li>
            <Link to="cart">Cart</Link>
          </li>
          <li>
            {count}
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
        <Outlet context={{count, setCount, cards, setCards}}/>
      </div>
    </>
  )
}

export default App
