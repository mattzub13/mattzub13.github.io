import { motion } from 'framer-motion'
import React from 'react'
const mediaLinks: { link: string, icon: string }[] = [
    {
        link: "https://www.linkedin.com/in/eduardo-mateo-zubieta-yucra-6b47aa252/",
        icon: "fa-linkedin"
    },
    {
        link: "https://github.com/MattZub13",
        icon: "fa-github"
    },
    {
        link: "https://www.instagram.com/mateo_zubieta13/",
        icon: "fa-instagram"
    }
]
export const MediaLinks = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className='flex py-8 lg:py-4 gap-3 lg:gap-8 absolute bottom-28 left-[30%] md:left-[42%] lg:static  '>

            {mediaLinks.map((mediaLink) => (
                <motion.div
                    key={mediaLink.link}
                    initial={{ y: 0 }}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-8 lg:w-10 aspect-square bg-primary rounded-full flex items-center justify-center cursor-pointer"
                >
                    <a
                        href={mediaLink.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary text-lg lg:text-xl flex items-center justify-center"
                    >
                        <i className={`fa-brands ${mediaLink.icon}`}></i>
                    </a>
                </motion.div>
            ))}
        </motion.div>
    )
}
