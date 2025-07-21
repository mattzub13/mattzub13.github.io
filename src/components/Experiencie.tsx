import { AnimatePresence, motion } from 'framer-motion';

const experiences = [
    {
        title: 'Desarrollador Frontend',
        company: 'Favorcito',
        date: '2025 may - 2025 jul',
        description: 'Desarrollé interfaces de distintos productos con React.',
        img: "https://res.cloudinary.com/dltdmauyw/image/upload/v1752958510/svg-favorcito_eraiuk.svg",
        size: "h-8"
    },
    {
        title: 'Desarrollador Full Stack',
        company: 'Chicken 5',
        date: '2024 oct - 2024 dec',
        description: 'Desarrolle un punto de venta con conexion a impresoras y generacion de reportes.',
        img: "https://res.cloudinary.com/dltdmauyw/image/upload/v1752958756/chicken5_yvollv.png",
        size: "h-16"
    },
    {
        title: 'Desarrollador Full Stack',
        company: 'UNTRES SRL',
        date: '2024 jan - 2024 sep',
        description: 'Desarrolle un software ERP para la administracion de procesos.',
        img: "https://res.cloudinary.com/dltdmauyw/image/upload/v1752958492/UN3_rlu9ym.webp",
        size: "h-20"
    },
    {
        title: 'Intern',
        company: 'Ciudatos',
        date: '2023 feb - 2024 dec',
        description: 'Realice analisi de datos y diseñe interfaces con astro.',
        img: "https://res.cloudinary.com/dltdmauyw/image/upload/v1752958756/logo-ciudatos_g3a7u2.png",
        size: "h-12"
    },
    // Puedes agregar más...
]

export const Experiencie = () => {


    return (
        <section className='bg-secondary  h-screen w-screen pl-8 lg:px-8'>

            <div className="relative px-4 py-20" id='experiencia'>
                {/* Línea vertical centrada */}
                <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-1 -translate-x-1/2">
                    <div className="h-full w-full bg-primary"></div>
                </div>

                <ul className="space-y-10" >
                    {experiences.map((exp, idx) => (
                        <motion.li
                            key={idx}
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                                duration: 0.6,
                                scale: { type: "spring", stiffness: 80, damping: 10 },
                            }}
                            viewport={{
                                once: false,
                                amount: 0.4
                            }}
                            className={`relative flex items-center ${idx % 2 !== 0 ? 'justify-end' : 'justify-start'}`}
                        >
                            {/* Punto en el centro */}
                            <div className="absolute -left-4 lg:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-secondary shadow-lg z-10"></div>

                            {/* Contenido a los lados, alternado */}
                            <div className={`w-full lg:w-1/2  lg:pr-8 ${idx % 2 === 0 ? 'text-center lg:text-right' : 'text-center lg:text-left'} ${idx % 2 === 0 ? '' : 'order-last lg:pl-8 text-left'}`}>
                                <div className={`bg-white p-4 rounded-xl shadow-lg flex ${idx % 2 !== 0 ? 'flex-col-reverse lg:flex-row' : 'flex-col-reverse lg:flex-row-reverse'} justify-between items-center gap-2 lg:gap-0`}>
                                    <div className={`flex flex-col justify-start`}>
                                        <h3 className="text-lg font-semibold text-gray-8009">{exp.title}</h3>
                                        <p className="text-sm text-gray-500">{exp.company} • {exp.date}</p>
                                        <p className="text-sm text-gray-500">{exp.description}</p>
                                    </div>
                                    <img src={exp.img} alt="" className={`w-auto ${exp.size}`} />
                                </div>

                            </div>
                        </motion.li>
                    ))}
                </ul>

            </div>
            {/* <div className='flex justify-center '>
                <div className='bg-primary rounded-xl py-4 px-6 w-auto text-secondary font-display'>
                    Hagamos esta lista mas grande
                </div>
            </div> */}
        </section>
    );
};
