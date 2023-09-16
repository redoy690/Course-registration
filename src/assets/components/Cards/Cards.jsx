import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import PropTypes from 'prop-types';


const Cards = ({handleAddToBookmark}) => {

    const [cards, setCards]= useState([])
    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])

    return (
        <div className=" md:w-3/4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-1 order-1 ">
            {
                cards.map(card => <Card key={card.id} card={card} handleAddToBookmark={handleAddToBookmark} ></Card>)
            }
        </div>
    );
};

Cards.propTypes ={
    handleAddToBookmark: PropTypes.func
}

export default Cards;