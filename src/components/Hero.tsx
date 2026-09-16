import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react'
import { HabilitiesTitle } from './HeroComponents/HabilitiesTitle';
import { ProfileCircle } from './HeroComponents/ProfileCircle';
import { ContentCards } from './HeroComponents/ContentCards';
import { FloatingButton } from './HeroComponents/FloatingButton';
import { label } from 'framer-motion/client';
import { MediaLinks } from './HeroComponents/MediaLinks';
import { Navbar } from './Navbar';
import { NavBarMobile } from './HeroComponents/NavBarMobile';

export const Hero = () => {

  return (
    <div className="w-screen h-screen bg-primary flex justify-center">
      <div className="relative w-full max-w-[90vw] max-h-[90vh] p-8 rounded-2xl bg-secondary text-primary font-display shadow-xl mt-8 overflow-hidden">

        {/* Título con palabra animada */}
        <HabilitiesTitle />

        {/* Imagen con fade */}
        <ProfileCircle />

        {/* Nombre */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute top-[50%] lg:top-[80%] lg:bottom-24 transform left-[25%] md:left-[32%] lg:left-[36%] xl:left-[41%] text-xl md:text-3xl font-bold"
        >
          Mateo Zubieta
        </motion.h1>
        <div className='block lg:hidden'>
          <MediaLinks />
        </div>


        <Navbar />

        <NavBarMobile />

        {/* Otra card o texto adicional */}
        <ContentCards />

        <FloatingButton />
      </div >
    </div >
  );
};