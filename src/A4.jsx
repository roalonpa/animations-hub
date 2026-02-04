import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { useRef, useState, useEffect, use } from "react"

export default function A4 () {

    const ref = useRef(null)
    const [rect, setRect] = useState({width: 1, height: 1, left: 0, top: 0})
    const gradientX = useMotionValue(0.5)
    const gradientY = useMotionValue(0.5)
    const background = useTransform(() => `conic-gradient(at calc(${gradientX.get() * 100}% - ${rect.left}px) calc(${gradientY.get() * 100}% - ${rect.top}px), #ff008c, #00aeff, #ffbc05, #ff008c)`)

    function measure() {
        if (!ref.current) return
        const r = ref.current.getBoundingClientRect()
        setRect({width: r.width, height: r.height, left: r.left, top: r.top})
    }

    useEffect(() => {
        measure()
        
        function handleMove(e) {
            gradientX.set(e.clientX / rect.width)
            gradientY.set(e.clientY / rect.height)
        }

        window.addEventListener('resize', measure)
        window.addEventListener('pointermove', handleMove)

        return () => {
            window.removeEventListener('resize', measure)
            window.removeEventListener('pointermove', handleMove)
        }
    }, [rect.width, rect.height, rect.left, rect.top])

    return (
        <>
                <motion.div 
                    ref={ref}
                    onPointerEnter={measure}
                    style={{
                        width: window.innerWidth < 768 ? '10rem' : window.innerWidth <= 1024 ? '20rem' : '24rem',
                        height: window.innerWidth < 768 ? '10rem' : window.innerWidth <= 1024 ? '20rem' : '12rem',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                        margin: 'auto',
                        background: background
                    }}
                />
        </>
    )
}