import { useContext } from 'react'
import { AppContext } from './App.jsx'

export default function Homepage({children}) {
    const { scroll } = useContext(AppContext);
    return (
        <div id="homepage-wrapper">
            <div id='homepage-title-wrapper'>
                <h1>Animations Hub</h1>
                <p>This is an experimental website meant to explore animation techniques and examples.</p>
                <button id='homepage-btn' onClick={(() => scroll('animation-cards-wrapper'))}>Click me</button>
            </div>
            <div id="homepage-animation-outer-wrapper">
                <div id="homepage-animation-inner-wrapper">
                    {children}
                </div>
            </div>
        </div>
    )
}