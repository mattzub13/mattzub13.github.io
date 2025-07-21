import { motion } from 'framer-motion'
import React from 'react'
const navItems: { icon: string, label: string, navigate: string }[] = [
    {
        icon: "fa-briefcase",
        label: "Experiencia",
        navigate: "experiencia"
    },
    {
        icon: "fa-diagram-project",
        label: "Proyectos",
        navigate: "proyectos"
    },
    {
        icon: "fa-layer-group",
        label: "Stack",
        navigate: "stack"
    },
    {
        icon: "fa-note-sticky",
        label: "Blog",
        navigate: "blog"
    },

]
export const NavBarMobile = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid lg:hidden grid-cols-2 md:grid-cols-4 gap-x-6 md:gap-x-4 gap-y-3 text-center absolute bottom-12 right-4 md:right-[50px]">
            {navItems.map((item) => (
                <div key={item.label} >
                    <a
                        className="flex md:justify-center  items-center gap-1 md:gap-4"
                        href={`#${item.navigate}`}
                    >  <i className={`fa-solid ${item.icon} text-xl text-primary`} />
                        <span className="text-xs text-primary">{item.label}</span>
                    </a>

                </div>
            ))}
        </motion.div>

    )
}
