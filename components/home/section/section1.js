import React from 'react'
import Image from "next/image"
import TextCard from '../../Card/textCard';
import MoreNike from '../../Card/moreNike';


function section1() {
    return (
        <div className='px-16'>
            <div>

                <TextCard imgsrc="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/4c663418-9349-4e6b-9cb0-2268a5996982/nike-just-do-it.jpg" tag="Nike Free Metcon 4" head="GO ALL OUT" desc="Lift. Jump. Pivot. With a mix of flexibility and stability,
this training shoe helps you get the most out of every movement." link="/" />
            </div>
            <div>
                <p className='text-[28px] m-auto justify-center '>Featured</p>
                <TextCard imgsrc="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/9a8875eb-e05b-4cd9-83ca-f6cac2da3499/nike-just-do-it.jpg" head="JORDAN X PARIS SAINT-GERMAIN" desc="The new Jordan x Paris Saint German Collection draws on the light that paris shines on the world stage." link="/" />
            </div>
           
            <div>
                <p className='text-[28px] m-auto justify-center '>The Latest</p>
                <TextCard imgsrc="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/0c210537-714d-415f-84fe-5d52a083836b/nike-just-do-it.png" tag="Nike Air Deldon 'Deldon Designs'" head="IT’S ON" link="/" />
            </div>
            <div>
                <p className='text-[28px] m-auto justify-center'>Trending</p>
                <TextCard imgsrc="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/9b110e5e-6799-4b41-8908-55790ea05e28/nike-just-do-it.jpg" head="BOLD BEGINNINGS" desc="Introduction the Alate sports bra, a natural fit for first-time bra wearer." link="/" />
            </div>

            <div>
                <p className='text-[28px] m-auto justify-center'>More Nike</p>
                <MoreNike/>
            </div>
        </div>
    )
}

export default section1
