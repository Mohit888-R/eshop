import React from 'react';
import Image from "next/image";

function moroNike() {
    const data = [
        {
            imgSrc: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_467,c_limit/cb91797a-6054-4201-8bee-c08700c83e47/nike-just-do-it.png",
            btn: 'men',
            link: '/men'
        },
        {
            imgSrc: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_467,c_limit/b47f5049-1b86-4642-b50c-310ce59b5940/nike-just-do-it.png",
            btn: 'woman',
            link: '/women'
        },
        {
            imgSrc: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_467,c_limit/44c84aa3-702f-49fd-80e0-a74258b9b0b6/nike-just-do-it.png",
            btn: 'kids',
            link: '/kids'
        }

    ]
    return (
        <div className='flex my-20' >
            {
                data.map((items, index) => (
                    <a href={items.link} key={index} className="">
                        <Image src={items.imgSrc} width={500} height={100} alt="" className='-mb-16 '/>
                        <div className=' mx-8  items-center  inline py-2 text-[18px] font-semibold px-6  bg-white border rounded-full'>{items.btn}</div>
                    </a>
                ))
            }
        </div>
    )
}

export default moroNike