import { useContext } from "react";
import { ShopContext } from "./App";

export default function Bottom(){
    const {count} = useContext(ShopContext)
    return(
        <h1>{count}</h1>
    )
}