"use client";
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react'

function Header() {
    const path = usePathname();
    useEffect(() => {
        console.log(path);
    })

    return (
        <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
            <Image src={'/logo.svg'} width={50} height={20} alt='logo' />
            <ul className='hidden md:flex gap-6'>
                <li className={`hover:text-blue-600 hover:font-bold transition-all cursor-pointer ${path == '/dashboard' && 'text-blue-600 font-bold'}`}>Dashboard</li>
                <li className={`hover:text-blue-600 hover:font-bold transition-all cursor-pointer ${path == '/dashboard/questions' && 'text-blue-600 font-bold'}`}>Questions</li>
                <li className={`hover:text-blue-600 hover:font-bold transition-all cursor-pointer ${path == '/dashboard/upgrade' && 'text-blue-600 font-bold'}`}>Upgrade</li>
                <li className={`hover:text-blue-600 hover:font-bold transition-all cursor-pointer ${path == '/dashboard/how' && 'text-blue-600 font-bold'}`}>How it Works?</li>
            </ul>
            <UserButton />
        </div>
    )
}

export default Header;