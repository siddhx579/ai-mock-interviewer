"use client";
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
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
            {/* Logo with Link to Home */}
            <div className='flex items-center gap-2'>
                <Link href="/">
                    <Image src={'/logo.svg'} width={50} height={20} alt='logo' className="cursor-pointer" />
                </Link>
                <span className='text-lg font-semibold text-white'>MockMate</span>
            </div>

            {/* Centered Nav Items */}
            <div className="flex-grow flex justify-center">
                <ul className='flex gap-6 cursor-pointer text-white'>
                    {[
                        { name: 'Dashboard', path: '/dashboard' },
                        { name: 'Upgrade', path: '/upgrade' },
                        { name: 'About', path: '/about' },
                        { name: 'How It Works', path: '/how' }
                    ].map(({ name, path: linkPath }, index) => (
                        <motion.li 
                            key={index} 
                            className={`px-4 py-2 rounded-full border border-transparent transition-all duration-300 ${path === linkPath ? 'text-blue-600 font-bold border-blue-400 shadow-md' : 'hover:border-blue-400 hover:shadow-md hover:text-blue-600'}`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Link href={linkPath}>{name}</Link>
                        </motion.li>
                    ))}
                </ul>
            </div>

            <UserButton />
        </div>
    );
}

export default Header;