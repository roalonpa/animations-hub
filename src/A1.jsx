import { motion } from "framer-motion";
import { useState } from "react";

import { GiCardAceClubs } from "react-icons/gi";
import { GiCardAceDiamonds } from "react-icons/gi";
import { GiCardAceHearts } from "react-icons/gi";
import { GiCardAceSpades } from "react-icons/gi";

export default function A1() {

    const cards = [ 
        {id: 'clubs', component: GiCardAceClubs}, 
        {id: 'diamonds', component: GiCardAceDiamonds}, 
        {id: 'hearts', component: GiCardAceHearts}, 
        {id: 'spades', component: GiCardAceSpades} 
    ];

    const [cardsOrder, setCardsOrder] = useState(cards);

    function rotateCards(array) {
        const copy = [...array];
        const first = copy.shift();
        copy.push(first);
        return copy;
    }

    return (
        <>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <ul style={{listStyle: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 0, flexWrap: 'wrap'}}>
                    {cardsOrder.map((card) => (
                        <motion.li key={card.id} layout transition={{type: 'spring', stiffness: 300, damping: 20}}>
                            <card.component size={80} style={{color: '#ffffff'}}/>
                        </motion.li>
                    ))}
                </ul>
                <button id="shuffle-button-A1" style={shuffleButtonStyle} onClick={() => setCardsOrder(rotateCards(cardsOrder))}>Shuffle</button>
            </div>
        </>
    )
}

const shuffleButtonStyle = {
    border: 'none',
    borderRadius: '5px',
    padding: '0.5rem 1rem',
    color: 'white',
    cursor: 'pointer',
    fontSize: '1rem',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
}