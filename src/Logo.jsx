import { motion } from 'framer-motion';

export default function Logo({colors, logoSquaresSize, gap, moving}) {

    const logoSize = `${logoSquaresSize * 2 + gap}rem`

    const logo = {
        width: logoSize,
        height: logoSize,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: `${gap}rem`,
    }

    return (
        <div id="logo" style={logo}>
            {colors.map((color) => {
                const Component = moving ? motion.div : 'div';
                return (
                    <Component 
                        key={color}
                        {...(moving && {layout: true})}
                        {...(moving && {transition: spring})}
                        style={{
                            width: `${logoSquaresSize}rem`,
                            height: `${logoSquaresSize}rem`,
                            backgroundColor: color,
                            borderRadius: '5px',
                        }}
                    ></Component>
                )
            })}
        </div>
    )
}

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 300,
}
