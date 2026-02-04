import { useContext } from "react"
import { AppContext } from "./App.jsx"

export default function Header({children}) {
  const { scroll } = useContext(AppContext);
  return (
    <>
        <div id="header-wrapper">
            <div id="header-spacer" style={{width: '2.4rem'}}></div>
            {children}
            <h1 id='header-title' onClick={() => scroll('top')} style={{cursor: 'pointer'}}>AnimationsHub</h1>
        </div>
    </>
  )
}