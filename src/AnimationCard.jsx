import { AnimatePresence, motion } from "framer-motion";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useState, useEffect, useContext } from "react";
import { AppContext } from "./App.jsx";

export default function AnimationCard({ title, description, type, code, children, cardId }) {

    const [isExpanded, setIsExpanded] = useState(false);
    const [showInner, setShowInner] = useState(false);
    const [innerContent, setInnerContent] = useState('animation');

    const { scrollRef } = useContext(AppContext);

    useEffect(() => {
        let timeout;

        if (isExpanded) {
            timeout = setTimeout(() => {
                setShowInner(true);
            }, 850);
        } else {
            setShowInner(false);
            setInnerContent('animation');
        }

        return () => { if (timeout) {clearTimeout(timeout)} };

    }, [isExpanded]);

    return (
        <>
            {!isExpanded &&
                <motion.div className="animation-card" style={animationCardStyle} layoutId={`animation-card-${cardId}`} transition={fastEase}>
                    <motion.div className="animation-card-upper" style={animationCardUpperStyle} onClick={() => setIsExpanded(true)} layoutId={`animation-card-upper-${cardId}`} transition={fastEase}>
                        <motion.div style={{position: 'absolute', top: '2rem', left: '0', textAlign: 'left', marginInline: '2rem'}} layoutId={`animation-card-text-${cardId}`} transition={fastEase}>
                            <p style={{margin: 0, marginBottom: '0.5rem', fontSize: '1rem'}}>{type}</p>
                            <h2 style={{margin: 0}}>{title}</h2>
                        </motion.div>
                    </motion.div>
                </motion.div>
            }
            {isExpanded && 
                <>
                    <div style={{position: 'relative', width: '20rem', height: '12rem'}}></div>
                    <motion.div style={backgroundStyle} onClick={() => setIsExpanded(false)}></motion.div>
                    <motion.div className="expanded-animation-card" style={ExpandedAnimationCardStyle} layoutId={`animation-card-${cardId}`} transition={slowEase}>
                        <motion.div style={ExpandedAnimationCardUpperStyle} layoutId={`animation-card-upper-${cardId}`} transition={slowEase}>
                            <motion.div style={{position: 'absolute', top: '2rem', left: '0rem', textAlign: 'left', marginInline: '2rem'}} layoutId={`animation-card-text-${cardId}`} transition={slowEase}>
                                <p style={{margin: 0, marginBottom: '0.5rem', fontSize: '1rem'}}>{type}</p>
                                <h2 style={{margin: 0, marginBottom: '2rem'}}>{title}</h2>
                            </motion.div>
                            {showInner && (
                                <AnimatePresence mode="wait">
                                    {innerContent === 'animation' && (
                                        <motion.div key={`animation-${cardId}`} ref={scrollRef} className="animation-container" initial={{ opacity: 0 }} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.3}} style={animationContainerStyle}>
                                            {children}
                                        </motion.div>
                                    )}
                                    {innerContent === 'code' && (
                                        <motion.div key={`code-${cardId}`} className="animation-code-container" initial={{ opacity: 0 }} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.3}} style={codeContainerStyle}>
                                            <SyntaxHighlighter language="javascript" style={atomOneDark} showLineNumbers>
                                                {code}
                                            </SyntaxHighlighter>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            )}
                        </motion.div>
                        <div style={{ padding: '1rem'}}>
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem'}}>
                                <div style={{display: 'flex', flexDirection: 'row', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', borderRadius: '5px', height: 'fit-content', backgroundColor: '#ff00f2'}}>
                                    <button className="animation-card-button" style={{...tabsButtonStyle, borderRadius: '5px 0 0 5px', backgroundColor: innerContent === 'animation' ? 'rgba(0, 0, 0, 0.2)' : '#ff00f2'}} onClick={() => setInnerContent('animation')}>Animation</button>
                                    <button className="animation-card-button" style={{...tabsButtonStyle, borderRadius: '0 5px 5px 0', backgroundColor: innerContent === 'code' ? 'rgba(0, 0, 0, 0.2)' : '#ff00f2'}} onClick={() => setInnerContent('code')}>Code</button>
                                </div>
                                <button className="animation-card-button" style={closeButtonStyle} onClick={() => setIsExpanded(false)}>Close</button>
                            </div>
                            <p className="animation-description">{description}</p>
                        </div>
                    </motion.div>
                </>
            }
        </>
    )
}

const animationCardStyle = {
    position: 'relative',
    height: '12rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}

const animationCardUpperStyle = {
    width: '100%',
    height: '11rem',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
}

const backgroundStyle = {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 999,
}

const ExpandedAnimationCardStyle = {
    width: '80vw',
    height: '80vh',
    backgroundColor: '#bf00ee',
    position: 'fixed',
    left: '10vw',
    borderRadius: '10px',
    overflow: 'hidden',
    zIndex: 1000,
}

const ExpandedAnimationCardUpperStyle = {
    width: '100%',
    height: '75%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
}

const closeButtonStyle = {
    border: 'none',
    width: 'fit-content',
    fontSize: '1rem',
    cursor: 'pointer',
    padding: '0.5rem 0.8rem',
    backgroundColor: '#ff00f2',
    color: 'white',
    borderRadius: '5px',
    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease',
}

const tabsButtonStyle = {
    border: 'none',
    width: 'fit-content',
    fontSize: '1rem',
    cursor: 'pointer',
    padding: '0.5rem 0.8rem',
    color: 'white',
    margin: 0,
    transition: 'background-color 0.3s ease, all 0.3s ease',
}

const codeContainerStyle = {
    width: '80%', 
    height: '70%', 
    overflowY: 'auto', 
    padding: '0 1rem',
}

const animationContainerStyle = {
    width: '60%',
    overflowY: 'scroll',
    padding: '2rem',
    backgroundColor: '#bf00ee',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
}

const slowEase = {
    duration: 0.85, 
    ease: [0.2, 0.8, 0.2, 1]
}

const fastEase = {
    duration: 0.65, 
    ease: [0.2, 0.8, 0.2, 1]
}