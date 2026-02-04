import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useContext } from "react"
import { AppContext } from "./App";
import { PiArrowArcRightBold } from "react-icons/pi";


export default function A3() {

    const { scrollRef } = useContext(AppContext);
    const { scrollYProgress } = useScroll({ container: scrollRef });

    const squareStyle = {
        position: 'absolute',
        top: window.innerHeight >= 1366 ? '18rem' : window.innerWidth > 1024 ? '8rem' : '14rem',
        left: '50%',
        transform: 'translateX(-50%)',
    }

    const rotationRight = useSpring(useTransform(scrollYProgress, [0, 0.4, 0.5, 0.6, 1], [0, 50, 250, 450, 500]), { stiffness: 40, damping: 40 });
    const rotationLeft = useSpring(useTransform(scrollYProgress, [0, 0.4, 0.5, 0.6, 1], [500, 450, 250, 50, 0]), { stiffness: 40, damping: 40 });

    const circles = [
        {
            id: 'c8',
            radius: window.innerWidth < 768 ? 80 : 105,
            strokeColor: "url(#grad3)",
            fillColor: "url(#grad6)",
            strokeDashArray: `${2*Math.PI*60*0.2} ${2*Math.PI*60*0.05}`,
            rotation: rotationLeft
        },
        {
            id: 'c7',
            radius: window.innerWidth < 768 ? 70 : 95,
            strokeColor: "url(#grad2)",
            fillColor: "url(#grad5)",
            strokeDashArray: `${2*Math.PI*50*0.4} ${2*Math.PI*50*0.1}`,
            rotation: rotationRight
        },
        {
            id: 'c6',
            radius: window.innerWidth < 768 ? 60 : 85,
            strokeColor: "url(#grad1)",
            fillColor: "url(#grad4)",
            strokeDashArray: `${2*Math.PI*40*0.3} ${2*Math.PI*40*0.2}`,
            rotation: rotationLeft
        },
        {
            id: 'c5',
            radius: window.innerWidth < 768 ? 50 : 75,
            strokeColor: "url(#grad3)",
            fillColor: "url(#grad6)",
            strokeDashArray: `${2*Math.PI*30*0.15} ${2*Math.PI*30*0.1}`,
            rotation: rotationRight
        },
        {
            id: 'c4',
            radius: window.innerWidth < 768 ? 40 : 65,
            strokeColor: "url(#grad2)",
            fillColor: "url(#grad5)",
            strokeDashArray: `${2*Math.PI*20*0.3} ${2*Math.PI*20*0.2}`,
            rotation: rotationLeft
        },
        {
            id: 'c3',
            radius: window.innerWidth < 768 ? 30 : 55,
            strokeColor: "url(#grad1)",
            fillColor: "url(#grad4)",
            strokeDashArray: `${2*Math.PI*10*0.3} ${2*Math.PI*10*0.2}`,
            rotation: rotationRight
        },
        {
            id: 'c2',
            radius: window.innerWidth < 768 ? 20 : 45,
            strokeColor: "url(#grad3)",
            fillColor: "url(#grad6)",
            strokeDashArray: `${2*Math.PI*20*0.3} ${2*Math.PI*20*0.2}`,
            rotation: rotationLeft
        },
        {
            id: 'c1',
            radius: window.innerWidth < 768 ? 10 : 35,
            strokeColor: "url(#grad2)",
            fillColor: "url(#grad5)",
            strokeDashArray: `${2*Math.PI*10*0.3} ${2*Math.PI*10*0.2}`,
            rotation: rotationRight
        },
    ]

    return (
        <div style={{width:"100%", height:"150rem"}}>
            <div style={{width: '100%', display: 'flex', justifyContent: 'flex-end'}}><span style={{color: 'white', fontSize: '1rem', fontWeight: 600, marginRight: '0.5rem'}}>scroll slowly</span> <PiArrowArcRightBold /></div>
            <svg 
                style={squareStyle}
                width={window.innerWidth < 768 ? 200 : 300 } 
                height={window.innerWidth < 768 ? 200 : 300 } 
                viewBox="0 0 250 250" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor: '#ff00f2', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: '#ff9cfa', stopOpacity: 1}} />
                    </linearGradient>
                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor: '#da45ff', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: '#e992ff', stopOpacity: 1}} />
                    </linearGradient>
                    <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor: '#ff00a2', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: '#ff90d6', stopOpacity: 1}} />
                    </linearGradient>
                    <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor: '#a10099', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: '#ff00f2', stopOpacity: 1}} />
                    </linearGradient>
                    <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor: '#8d00b1', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: '#da45ff', stopOpacity: 1}} />
                    </linearGradient>
                    <linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor: '#9e0064', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: '#ff00a2', stopOpacity: 1}} />
                    </linearGradient>
                    <radialGradient id="shadow" cx="50%" cy="50%" r="50%">
                        <stop offset="60%" style={{stopColor: 'black', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: 'black', stopOpacity: 0}} />
                    </radialGradient>
                </defs>

                <circle cx="50%" cy="50%" r={window.innerWidth < 768 ? 90 : 115} fill="url(#shadow)" />
                {circles.map((circle) => (
                    <circle key={`${circle.id}-fill`} cx="50%" cy="50%" r={circle.radius+5} fill={circle.fillColor}/>
                ))}
                {circles.map((circle) => (
                    <motion.circle
                        key={`${circle.id}-stroke`}
                        cx="50%"
                        cy="50%"
                        r={circle.radius}
                        stroke={circle.strokeColor}
                        strokeWidth="10"
                        fill="none"
                        strokeDasharray={circle.strokeDashArray}
                        strokeLinecap="round"
                        style={{rotate: circle.rotation}}
                    />
                ))}
                <circle cx="50%" cy="50%" r={window.innerWidth < 768 ? 5 : 30} fill="url(#grad1)" />
            </svg>
        </div>
    )
}