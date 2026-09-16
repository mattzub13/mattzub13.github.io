import { motion } from 'framer-motion'
import React from 'react'

export const FloatingButton = () => {
    return (
        <motion.div

            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }} // Subir -10px y volver
            transition={{
                duration: 2, // duración total del ciclo
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut", // hace que suba y baje suavemente
            }}
            onClick={() => (window.location.href = `#experiencia`)}
            className="w-16 aspect-square bg-accent rounded-full lg:flex items-center justify-center cursor-pointer right-12 bottom-12 absolute hidden"
        >
            <a

                href='#experiencia'
                className="text-secondary text-3xl flex items-center justify-center"
            >
                <i className="fa-solid fa-arrow-down"></i>
            </a>
        </motion.div>
    )
}
