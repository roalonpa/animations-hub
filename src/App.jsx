import { useState, useEffect, useRef, createContext } from 'react'
import { motion } from "motion/react"

import './App.css'
import './A.css'

import Header from './Header.jsx'
import Spacer from './Spacer.jsx'
import Homepage from './Homepage.jsx'
import AnimationCard from './AnimationCard.jsx'
import Logo from './Logo.jsx'

import A0 from "./A0.jsx"
import A1 from "./A1.jsx"
import A2 from "./A2.jsx"
import A3 from "./A3.jsx"
import A4 from "./A4.jsx"
import { animationsConfig } from './animationsConfig.js'

const componentMap = {A0, A1, A2, A3, A4}
export const AppContext = createContext();

export default function App() {

  const scrollRef = useRef(null);
  const colors = ['#ff00f2', '#bf00ee', '#ff00a2', '#ffffff'];

  function colorShuffle() {
    const initialOrder = colors;
    const [order, setOrder] = useState(initialOrder);
    function shuffle(array) {
        const newOrder = [...array] // copy of current order
        return newOrder.sort(() => Math.random() - 0.5) // sorts the copy depending on the number (negative or positive)
    }
    useEffect(() => {
        const timeout = setTimeout(() => {
            setOrder(shuffle(order))
        }, 1000)
        return () => clearTimeout(timeout)
    }, [order])
    return order;
  }

  function scroll(to) {
    if (to === 'top') {
      window.scrollTo({top: 0, behavior: 'smooth'})
      return
    }
    const el = document.getElementById(to)
    if (el) el.scrollIntoView({behavior: 'smooth', block: 'start'})
  }

  return (
    <AppContext.Provider value={{scroll, scrollRef}} >
      <Header>
        <Logo colors={colors} logoSquaresSize={1} gap={0.2} moving={false}/>
      </Header>
      <Homepage>
        <Logo colors={colorShuffle()} logoSquaresSize={7} gap={0.7} moving={true}/>
      </Homepage>
      <Spacer />
      <div style={{display: 'flex', justifyContent: 'center', marginBlock: '4rem'}}>
        <div id="animation-cards-wrapper">
          {animationsConfig.map((animation) => {
            const Component = componentMap[animation.component];
            return (
              <AnimationCard key={animation.id} cardId={animation.id} title={animation.title} description={animation.description} type={animation.type} code={animation.code}>
                <Component/>
              </AnimationCard>
            )
          })}
        </div>
      </div>
    </AppContext.Provider>
  )
}
