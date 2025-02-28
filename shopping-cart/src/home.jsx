import { useState, useContext } from "react"
import {Card, Cards} from "./card"
import './home.css'
import { useOutletContext } from "react-router-dom"
import { ShopContext } from "./App"

const Home = (props) => {
    const {count, setCount, cards, setCards} = useContext(ShopContext)
    return(
        <>
            <Cards items = {cards} setCards = {setCards} count = {count} setCount = {setCount}/>
        </>
    )
}

export default Home