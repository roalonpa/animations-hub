import { motion } from 'motion/react'
import { useState } from 'react'

export default function A0() {

    const tabs = [
        {id: 0, label: 'A'},
        {id: 1, label: 'N'},
        {id: 2, label: 'I'},
        {id: 3, label: 'M'},
        {id: 4, label: 'A'},
        {id: 5, label: 'T'},
        {id: 6, label: 'I'},
        {id: 7, label: 'O'},
        {id: 8, label: 'N'},
        {id: 9, label: 'S'}
    ]
    const [currentTab, setCurrentTab] = useState (0)

    return (
        <>
            <div id='buttons-wrapper-A0' style={{display: 'flex'}}>
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
                                style={underlineStyles}
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
    backgroundColor: 'rgba(0, 0, 0, 0.8)', 
    border: 'none', 
    borderRadius: '2px',
    color: 'white',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
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
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
    background: 'linear-gradient(135deg, #ff00f2, #ff68c8)',
}