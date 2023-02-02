import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import JordanLogo from "../../../assets/jordan_logo.svg";

function Header1() {
    return (
        <div className='hidden md:flex items-center px-8 py-1 bg-gray-300 bg-opacity-30'>
            <a href='/jordan' className="flex flex-1">
                <Image src={JordanLogo} width={28} height={28} alt="" className='p-1' />
            </a>
            <div className='space-x-2 text-[12px]'>
                <Link href="/authentication/register" className='hover:opacity-60'>Join Us</Link>
                <span className='border-l border-black text-[10px]'></span>
                <Link href='/authentication/login' className='hover:opacity-60'>Sign In</Link>
            </div>
        </div>
    )
}

export default Header1