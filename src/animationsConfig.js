export const A0_Code = `
import { motion } from 'motion/react'
import { useState } from 'react'

export default function A0() {

    const tabs = [
        {id: 0, label: 'A', underlineColor: '#fcefff'},
        {id: 1, label: 'N', underlineColor: '#f6d5ff'},
        {id: 2, label: 'I', underlineColor: '#eeb1ff'},
        {id: 3, label: 'M', underlineColor: '#e68bff'},
        {id: 4, label: 'A', underlineColor: '#dc5fff'},
        {id: 5, label: 'T', underlineColor: '#d335ff'},
        {id: 6, label: 'I', underlineColor: '#bc0cec'},
        {id: 7, label: 'O', underlineColor: '#9400bd'},
        {id: 8, label: 'N', underlineColor: '#6d008b'},
        {id: 9, label: 'S', underlineColor: '#430056'}
    ]
    const [currentTab, setCurrentTab] = useState (0)

    return (
        <>
            <div style={{display: 'flex', gap: '0.5rem', backgroundColor: '#ffffff', padding: '1rem', width: 'fit-content', borderRadius: '10px'}}>
                {tabs.map((tab) => (
                    <button
                        className='tabs-btn'
                        key={tab.id}
                        onClick={() => setCurrentTab(tab.id)}
                        style={buttonStyles}
                    >
                        {tab.label}
                        {currentTab === tab.id && (
                            <motion.div
                                layoutId='underline'
                                style={{...underlineStyles, backgroundColor: tab.underlineColor}}
                            >
                            </motion.div>
                        )}
                    </button>

                ))}
            </div>
        </>
    )
}

const buttonStyles = {
    position: 'relative', 
    width: '50px', 
    height: '50px', 
    backgroundColor: '#ff00f2', 
    border: 'none', 
    borderRadius: '2px',
    color: 'white',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
}

const underlineStyles = {
    position: 'absolute',
    bottom: -5,
    left: 0,
    width: '100%',
    height: 5,
    borderRadius: '2px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)'
}
`

export const A1_Code = `
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
            <div style={cardContainerStyle}>
                <ul style={{listStyle: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 0, padding: 0}}>
                    {cardsOrder.map((card) => (
                        <motion.li key={card.id} layout transition={{type: 'spring', stiffness: 300, damping: 20}}>
                            <card.component size={100} style={{color: '#ffffff'}}/>
                        </motion.li>
                    ))}
                </ul>
                <button style={shuffleButtonStyle} onClick={() => setCardsOrder(rotateCards(cardsOrder))}>Shuffle</button>
            </div>
        </>
    )
}

const cardContainerStyle = {
    width: '30rem', 
    height: '15rem', 
    backgroundColor: '#bf00ee', 
    borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', 
    position: 'relative', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center'
}

const shuffleButtonStyle = {
    border: 'none',
    borderRadius: '5px',
    padding: '0.5rem 1rem',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: 'white',
    cursor: 'pointer',
    fontSize: '1rem',
    position: 'absolute',
    bottom: '1rem',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
}
`

export const A2_Code = `
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "./App";
import { PiArrowArcRightBold } from "react-icons/pi";

export default function A2() {

    const [device, setDevice] = useState(window.innerWidth < 768 ? 'mobile' : window.innerWidth <= 1024 ? 'tablet' : 'desktop');

    const squareStyle = {
        height: '30%',
        position: 'absolute',
        top: window.innerHeight >= 1366 ? '18rem' : window.innerWidth > 1024 ? '12rem' : '14rem',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const circleStyle = {
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #f5009b, #ff68c8)',
        boxShadow: '0 4px 8px black',
        margin: 'auto',
    }

    useEffect(() => {
        function handleResize() {
            setDevice(window.innerWidth < 768 ? 'mobile' : window.innerWidth <= 1024 ? 'tablet' : 'desktop');
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    console.log("Device type:", device);

    const { scrollRef } = useContext(AppContext);
    const { scrollYProgress } = useScroll({ container: scrollRef });

    const squareWidthValue0 = device === 'mobile' ? '2rem' : device === 'tablet' ? '3rem' : '10rem';
    const squareWidthValue1 = device === 'mobile' ? '12rem' : device === 'tablet' ? '20rem' : '40rem';
    const squareWidthValue2 = device === 'mobile' ? '8rem' : device === 'tablet' ? '15rem' : '30rem';
    const squareWidthValue3 = device === 'mobile' ? '2rem' : device === 'tablet' ? '10rem' : '20rem';
    const squareWidthValue4 = device === 'mobile' ? '12rem' : device === 'tablet' ? '20rem' : '40rem';
    const squareWidthValueSmoothed = useSpring(
        useTransform (
            scrollYProgress,
            [0, 0.25, 0.5, 0.75, 1],
            [squareWidthValue0, squareWidthValue1, squareWidthValue2, squareWidthValue3, squareWidthValue4]
        ), { stiffness: 50, damping: 30 }
    );

    const circleWidthValue0 = device === 'mobile' ? '1rem' : device === 'tablet' ? '2rem' : '2rem';
    const circleWidthValue1 = device === 'mobile' ? '8rem' : device === 'tablet' ? '8rem' : '4rem';
    const circleWidthValue2 = device === 'mobile' ? '6rem' : device === 'tablet' ? '12rem' : '8rem';
    const circleWidthValue3 = device === 'mobile' ? '1rem' : device === 'tablet' ? '8rem' : '12rem';
    const circleWidthValue4 = device === 'mobile' ? '6rem' : device === 'tablet' ? '4rem' : '4rem';
    const circleSizeValueSmoothed = useSpring(
        useTransform (
            scrollYProgress,
            [0, 0.25, 0.5, 0.75, 1],
            [circleWidthValue0, circleWidthValue1, circleWidthValue2, circleWidthValue3, circleWidthValue4]
        ), { stiffness: 50, damping: 30 }
    )

    return (
        <div style={{width: '100%'}}>  
            <div style={{width: '100%', display: 'flex', justifyContent: 'flex-end'}}><span style={{color: 'white', fontSize: '1rem', fontWeight: 600, marginRight: '0.5rem'}}>scroll slowly</span> <PiArrowArcRightBold /></div>
            <div style={{width: '100%', height: '100rem'}}>
                <motion.div style={{...squareStyle, width: squareWidthValueSmoothed}}>
                    <motion.div style={{...circleStyle, width: circleSizeValueSmoothed, height: circleSizeValueSmoothed}}></motion.div>
                </motion.div>
            </div>
            <div></div>         
        </div>
    )
}
`

export const A3_Code = `

`

export const A4_Code = ``


export const animationsConfig = [
    {
      id: 'A0',
      title: "Tab Underline Animation",
      description: "An animated underline that moves between tabs when clicked.",
      type: "layout",
      component: 'A0',
      code: A0_Code
    },
    {
        id: 'A1',
        title: "Card Deck Shuffle Animation",
        description: "An animated simplified card deck, with four aces, that smoothly reorders items using layout-based transitions.",
        type: "layout",
        component: 'A1',
        code: A1_Code
    },
    {
        id: 'A2',
        title: "Scroll-Linked Scale Animation",
        description: "A square and a circle dynamically resize as the user scrolls, using scroll-linked motion values.",
        type: "scroll",
        component: 'A2',
        code: A2_Code
    },
    {
        id: 'A3',
        title: "Scroll-Driven Layered Rotation Animation",
        description: "A multi-layered circular composition that rotates independently based on scroll progress, creating a dynamic radial motion effect.",
        type: "scroll",
        component: 'A3',
        code: A3_Code
    },
    {
        id: 'A4',
        title: "Pointer-Responsive Conic Gradient",
        description: "A dynamic gradient that reacts to the cursor position and changes the gradient's origin based on it, creating a soft highlight that follows user movement across the window.",
        type: "pointer",
        component: 'A4',
        code: A4_Code
    }
]