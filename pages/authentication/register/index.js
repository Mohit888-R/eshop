import Image from 'next/image';
import React from 'react';
import NikeLogo from "../../../assets/nikeLogo.png";
import Header1 from '../../../components/home/header/Header1';
import Header2 from '../../../components/home/header/Header2';
import Footer from '../../../components/home/Footer/footer';
import Link from 'next/link';

function index() {
  return (
    <div className=''>
        <Header1/>
            <Header2/>
        <div className='py-16 flex m-auto justify-center text-center'>
            <div className='leading-6'>
            <Image src={NikeLogo} width={40} height={40} alt="" className='m-auto flex'/>
            <p className='uppercase text-[24px]  font-bold text-center'>BECOME A NIKE MEMBER</p>
            <p className='py-4 text-[16px] opacity-70 leading-5'>Create your Nike Member profile and get first<br></br> access to the very best of Nike products, inspiration <br></br> and community.</p>
            <form className='py-4 flex flex-col space-y-4'>
                <input type="text" placeholder='Email address' className='px-4 py-2 border text-[16px] font-normal'/>
                <input type="text" placeholder='Password' className='px-4 py-2 border text-[16px] font-normal'/>
                <input type="text" placeholder='First Name' className='px-4 py-2 border text-[16px] font-normal'/>
                <input type="text" placeholder='Last Name' className='px-4 py-2 border text-[16px] font-normal'/>
                <input  placeholder='Date of Birth' type="date"  className='px-4 py-2 border text-[16px] font-normal'/>
                <p className='text-[12px] font-normal opacity-80'>Get a Nike Member Reward every year on your Birthday.</p>
                <div className='flex gap-8'>
                    <div className='gap-2 flex flex-1 text-[12px] font-semibold'>
                    <input type="checkbox" id='check'></input>
                    <label htmlFor='check' className='opacity-80 leading-3 font-normal' >Sign up for emails to get updates from Nike on <br></br> products, offers and your Member benefits</label>
                    </div>
                </div>
                <div className='text-[12px]'>
                By creating an account, you agree to Nike's  <a href='/privacy-policy'>Privacy Policy</a> and <a href='/terms'>Terms of Use </a> .
                </div>
                <button className='uppercase px-8 py-2 text-[16px] border bg-black rounded-md text-white '>Sign In</button>
                <div className='text-[12px]'>
                Not a Member? <Link href='/authentication/register' className='underline font-bold'>Join Us</Link>.
                </div>
            </form>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default index