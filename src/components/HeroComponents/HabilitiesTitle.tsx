import { motion, AnimatePresence } from 'framer-motion'
import React, { useEffect, useState } from 'react'
const words = ["Frontend", "React", "TypeScript", "React Native"];

export const HabilitiesTitle = () => {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);
    return (
        <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute top-12 left-[10%] lg:left-[10%] text-xl md:text-3xl lg:text-4xl xl:text-6xl font-bold whitespace-nowrap"
        >
            Desarrollador en
            {/* Salto de línea solo en mobile */}
            <span className="block md:hidden" />
            <span className="inline-block relative h-[1.2em] align-middle ml-1 md:ml-2">
                <AnimatePresence mode="wait">
                    <motion.span
                        key={words[index]}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="absolute left-0 top-0"
                    >
                        {words[index]}
                    </motion.span>
                </AnimatePresence>
            </span>
        </motion.h1>

    )
}
