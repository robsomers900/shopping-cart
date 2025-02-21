import { useState } from "react"
import {Card, Cards} from "./card"
import './home.css'
import { useOutletContext } from "react-router-dom"

const Home = (props) => {
    const {count, setCount, cards, setCards} = useOutletContext()
    return(
        <>
            <Cards items = {cards} setCards = {setCards} count = {count} setCount = {setCount}/>
        </>
    )
}

export default Home