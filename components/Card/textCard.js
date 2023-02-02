import React from 'react'
import Image from "next/image";

function textCard({ imgsrc, tag, head, desc, link }) {
    return (
        <div>
            <Image src={imgsrc} width={1400} height={800} alt="" className='m-auto flex py-2' />

            <div className='leading-6 text-center py-8'>
                <p className='text-[16px] py-1'>{tag}</p>
                <p className='text-[56px] font-extrabold'>{head}</p>
                <p className='text-[16px] font-normal py-4'>{desc}</p>
                <a href={link} className='bg-black text-white px-6 items-center py-2 rounded-full'>Shop</a>
            </div>
        </div>
    )
}

export default textCard
