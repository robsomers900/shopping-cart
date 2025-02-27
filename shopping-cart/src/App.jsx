import { useEffect, useState } from 'react'
import './App.css'
import Home from './home'
import {Link, Outlet} from "react-router-dom"

const useProduct = () => {
  const [productData, setProductData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products', {mode: 'cors'})
    .then((response) => {
      if (response.status > 400) {
        throw new Error("server error")
      }
      return response.json()
    })
    .then((response) => setProductData([{
      item: response[0].name,
      name: response[0].name, //update this to fetch from api
      description: response[0].description, //update this to fetch from api
      price: response[0].price, //update this to fetch from api
      quantity: 0
    },
    {
      item: response[1].name,
      name: response[1].name, //update this to fetch from api
      description: response[1].description, //update this to fetch from api
      price: response[1].price, //update this to fetch from api
      quantity: 0
    }
  ])
    )
    .catch((error) => setError(error))
    .finally(() => setLoading(false))
  },
  []
  )
  
  return{productData, error, loading}
}



function App() {
  const [count, setCount] = useState(0)
  const [order, setOrder] = useState([])
  const{productData, loading, error} = useProduct()
  const[cards, setCards] = useState([])
  // const [cards, setCards] = useState([
  //   {
  //       item: "kettle",
  //       name: "Kettle", //update this to fetch from api
  //       description: "Boils Water", //update this to fetch from api
  //       price: 10, //update this to fetch from api
  //       quantity: 0
  //   },
  //   {
  //       item: "toaster",
  //       name: "Toaster",
  //       description: "Cooks Bread",
  //       price: 15,
  //       quantity: 0
  //   }
  // ])
  //   useEffect(() => {
  //     if(productData){
  //       setCards({
  //         productData
  //       })
  //     }
  //   }, [productData]
  // )

  useEffect(() => {
    if(productData.length > 0){
      setCards(productData)
    }
  }, [productData])
  
  if(loading){
    return(
      <h1>Loading...</h1>
    )
  }
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
        <Outlet context={{count, setCount, cards, setCards, productData}}/>
      </div>
    </>
  )
}

export default App
