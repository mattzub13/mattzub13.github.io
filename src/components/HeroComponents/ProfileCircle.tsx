import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
const images = [
    "https://res.cloudinary.com/dltdmauyw/image/upload/v1752763049/avatartion_h5wtu3.png",
    "https://res.cloudinary.com/dltdmauyw/image/upload/v1752763559/avatartion3_dee5vm.png",
    "https://res.cloudinary.com/dltdmauyw/image/upload/v1752763559/avatartion2_r8xb35.png"
];

export const ProfileCircle = () => {
    const [imageIndex, setImageIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex((prev) => (prev + 1) % images.length);
        }, 2500); // Cambia cada 3 segundos
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="absolute top-60 lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-52 h-52 lg:w-72 lg:h-72 overflow-hidden rounded-full bg-accent ">
            <AnimatePresence mode="wait">
                <motion.img
                    key={images[imageIndex]}
                    src={images[imageIndex]}
                    alt="avatar"
                    className="absolute w-full h-full object-cover rounded-full z-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                />
            </AnimatePresence>
        </div>
    )
}
