import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";


const Cards = () => {

    const [cards, setCards]= useState([])
    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])

    return (
        <div className=" md: w-3/4 grid sm: grid-cols-1 md:grid-cols-3 gap-6">
            {
                cards.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default Cards;