import { motion } from 'framer-motion';
import React, { useState } from 'react'
const navItems: { icon: string, label: string, navigate: string }[] = [
    {
        icon: "fa-briefcase",
        label: "Experiencia",
        navigate: "experiencia"
    },
    // {
    //     icon: "fa-note-sticky",
    //     label: "Blog",
    //     navigate: "blog"
    // },
    // {
    //     icon: "fa-layer-group",
    //     label: "Stack",
    //     navigate: "stack"
    // },
    // {
    //     icon: "fa-diagram-project",
    //     label: "Proyectos",
    //     navigate: "proyectos"
    // }
]
export const Navbar = () => {

    const [hoveredIndex, setHoveredIndex] = useState(null);
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-8 left-[220px] lg:left-[36%] xl:left-[44%] lg:flex hidden gap-6"
        >
            {navItems.map((item, index) => (
                <div
                    key={item.label}
                    className="flex items-center gap-2"
                    onClick={() => (window.location.href = `#${item.navigate}`)}
                    onMouseEnter={() => setTimeout(() => {
                        setHoveredIndex(index)
                    }, 80)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <div className="w-10 aspect-square bg-primary rounded-full flex items-center justify-center cursor-pointer">
                        <a

                            href={`#${item.navigate}`}
                            className="text-secondary text-lg flex items-center justify-center"
                        > <i className={`fa-solid ${item.icon}`} /></a>
                    </div>


                    <motion.span
                        animate={
                            hoveredIndex === index
                                ? { width: "auto", opacity: 1, x: 0 }
                                : { width: 0, opacity: 0, x: -10 }
                        }
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden whitespace-nowrap "
                    >
                        {item.label}
                    </motion.span>
                </div>
            ))}
        </motion.div>
    )
}
