import { motion } from 'framer-motion';
import React from 'react'
interface BlogPost {
    slug: string;
    title: string;
    date: Date;
    description: string
}
export const Blog = ({ posts }) => {
    return (
        <section className='bg-primary h-screen w-screen pl-8 lg:px-12 flex flex-col lg:flex-row justify-center gap-12 items-center mt-40 lg:mt-0 p-12 lg:p-0' id='blog'>
            <motion.div


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
            >
                <h1 className='font-display text-accent text-2xl lg:text-5xl lg:text-left text-center lg:py-4'>Me gusta hablar de muchas cosas,</h1>
                <h1 className='font-display text-accent text-2xl lg:text-5xl lg:text-left text-center lg:py-4'>aca las dejo plasmadas</h1>
            </motion.div>
            <div>
                {posts.map((post: BlogPost) => (


                    <motion.div
                        key={post.slug}
                        className="bg-white flex flex-col p-8 rounded-xl gap-6 shadow-xl"
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
                    >
                        <div className="px-2 pt-2 rounded-xl bg-accent flex justify-center items-center">
                            <img
                            className='h-52 w-52 object-cover'
                                src="https://res.cloudinary.com/dltdmauyw/image/upload/v1758219736/blog-1-miniatura_sakvja.png"
                                alt=""
                            />
                        </div>

                        <div className="flex flex-col items-center justify-center lg:gap-4">
                            <h1 className="text-center text-xl font-semibold">{post.title}</h1>
                            <p className="h-12 line-clamp-3 overflow-hidden text-ellipsis text-sm text-gray-600">
                                {post.date.toLocaleDateString()}
                            </p>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="bg-primary rounded-full px-12 py-2"
                            >
                                <a href={post.slug} className="text-white text-lg font-semibold">
                                    Leer
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
