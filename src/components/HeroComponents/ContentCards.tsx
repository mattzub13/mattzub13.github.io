import React from 'react'
import { MediaLinks } from './MediaLinks'
import { motion } from 'framer-motion'

export const ContentCards = () => {
    return (
        <div className='hidden lg:block'>
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}

                transition={{ duration: 0.6 }} className="absolute top-[30%] lg:left-0 xl:left-[5%] p-6 rounded-xl w-[300px] lg:w-[400px] xl:w-[460px] font-display">
                <h2 className="text-xl xl:text-2xl font-bold mb-2">+3 años de experiencia</h2>
                <p className="font-sans font-extralight mb-2 text-xs xl:text-sm">
                    Graduado de Ingeniería de Sistemas en la <br /><span className="font-semibold">Universidad Católica Boliviana</span>.
                </p>
                <p className="font-sans text-xs xl:text-sm">
                    Apasionado por el desarrollo frontend y la <br />construcción de interfaces <br /> limpias, modernas y funcionales.
                </p>
                <MediaLinks />
            </motion.div >
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute bottom-[23%] xl:bottom-[30%] right-[3%] bg-secondary text-primary font-display p-6 rounded-2xl w-[270px] xl:w-[400px]"
            >
                <h2 className=" text-2xl xl:text-3xl font-bold mb-4">Mi portafolio</h2>
                <p className="font-sans text-md leading-snug">
                    Aquí comparto mi trabajo, mis proyectos y todo lo que representa mi camino como desarrollador Full Stack. ¡Gracias por visitar!
                </p>
            </motion.div>
        </div>
    )
}
