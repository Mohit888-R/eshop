import React from 'react'

function footer() {
  return (
    <div className='lg:px-28 px-8 lg:space-y-0 space-y-8   m-auto justify-center  bg-black mt-4 py-16  md:grid md:grid-cols-4 bg-opacity-90 text-[16px] font-normal text-gray-400'>
       <div>
        <h1 className='text-[18px] font-bold text-white'>Social Media</h1>
        
        <p>Twitter</p>
        <p>Youtube</p>
        <p>Facebook</p>
        <p>Instagram</p>
       </div>
       <div>
        <h1  className='text-[18px] font-bold text-white'>About Nike</h1>
        <p>News</p>
        <p>Careers</p>
        <p>Inverstors</p>
        <p>Sustainablity</p>
       </div>
       <div>
        <h1  className='text-[18px] font-bold text-white'>Other Links</h1>
        <p>Guides</p>
        <p>Terms of Sales</p>
        <p>Privacy and Policy</p>
       </div>
       <div>
        <h1  className='text-[18px] font-bold text-white'>Get Help</h1>
        <p>Order Status</p>
        <p>Delivery</p>
        <p>Return</p>
        <p>Contact Us</p>
       </div>
    </div>
  )
}

export default footer