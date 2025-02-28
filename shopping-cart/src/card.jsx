import { ShopContext } from './App';
import './card.css'
import { useContext } from 'react';

function Card(props) {
    const {count, setCount, cards, setCards} = useContext(ShopContext)
    const handleCartIncrease = () => {
        props.setCount(props.count + 1)
        props.setCards((prevCards) =>
            prevCards.map((card) =>
                card.item === props.item.item ? { ...card, quantity: card.quantity + 1 } : card
            )
        );
        console.log(props.item)
    }
    const handleCartDecrease = () => {
        props.setCount(props.count - 1)
        props.setCards((prevCards) =>
            prevCards.map((card) =>
                card.item === props.item.item ? { ...card, quantity: card.quantity - 1 } : card
            )
        );
        console.log(card.item)
    }

    return(
        <>
            <div>
                <h1>{props.name}</h1>
                <h2>{props.description}</h2>
                <h3>${props.price}</h3>
            </div>
            <div>
                <button onClick = {handleCartIncrease}>+</button>
                <button onClick = {handleCartDecrease}>-</button>
            </div>
        </>
    )
}

function Cards(props){
    const {count, setCount, cards, setCards} = useContext(ShopContext)
    return(
        <>
            {props.items.map((item)=>{
                return <Card key={item.item} item={item} name = {item.name} description = {item.description} price = {item.price} count = {props.count} setCount = {props.setCount} setCards = {props.setCards}/>
            })}
        </>
    )
}

export {Card, Cards}