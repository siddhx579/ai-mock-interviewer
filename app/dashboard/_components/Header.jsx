"use client";
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

function Header() {
    const path = usePathname();
    useEffect(() => {
        console.log(path);
    }, [path]);

    return (
        <div className='flex p-4 items-center justify-between bg-gradient-to-r from-[#212631] to-[#4E576A] shadow-lg backdrop-blur-md'>
            <div className='flex items-center gap-2'>
                <Image src={'/logo.svg'} width={50} height={20} alt='logo' />
                <span className='text-lg font-semibold text-white'>MockMate</span>
            </div>
            <ul className='hidden md:flex gap-6 cursor-pointer text-white'>
                {['Dashboard', 'Questions', 'Upgrade', 'About', 'How It Works'].map((name, index) => (
                    <motion.li 
                        key={index} 
                        className={`px-4 py-2 rounded-full border border-transparent transition-all duration-300 ${path === `/dashboard/${name.toLowerCase().replace(' ', '-')}` ? 'text-blue-600 font-bold border-blue-600 shadow-md' : 'hover:border-blue-400 hover:shadow-md hover:text-blue-600'}`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {name}
                    </motion.li>
                ))}
            </ul>
            <UserButton />
        </div>
    );
}

export default Header;