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