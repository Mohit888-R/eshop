import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import NikeLogo from "../../../assets/nikeLogo.png";
import SearchIcon from "../../../assets/searchIcon.svg";
import Heart from "../../../assets/heart.svg";
import Cart from "../../../assets/cart.svg";
import MenuBars from "../../../assets/MenuBars.svg";

const NavData = [
    {
        category: "Men",
        submenu: [
            {
                menuHead: "New & Featured",
                submenuLinks: [
                    {
                        tab: "New Releases",
                    },
                    {
                        tab: "SNKRS Launch Calendar",
                    },
                    {
                        tab: "Member Access",
                    },
                    {
                        tab: "Air Force 1",
                    },
                    {
                        tab: "Couple Wear",
                    },
                    {
                        tab: "Basic Essentials",
                    },
                    {
                        tab: "Football Club Kits",
                    },
                    {
                        tab: "Sustainable Materials",
                    },
                    {
                        tab: "Top Picks Under ₹ 7 500.00",
                    },
                    {
                        tab: "Sale",
                    }
                ]
            },
            {
                menuHead: "Shoes",
                submenuLinks: [
                    {
                        tab: "News Sneakers",
                    },
                    {
                        tab: "All Shoes",
                    },
                    {
                        tab: "Lifestyle",
                    },
                    {
                        tab: "Running",
                    },
                    {
                        tab: "Basketball",
                    },
                    {
                        tab: "Jordan",
                    },
                    {
                        tab: "Football",
                    },
                    {
                        tab: "Gym and Training",
                    },
                    {
                        tab: "Skateboarding",
                    },
                    {
                        tab: "Tenning",
                    },
                    {
                        tab: "sandals and Slides",
                    },
                    {
                        tab: "Customise with Nike By You",
                    },
                    {
                        tab: "All Sale Shoes"
                    }
                ]
            },
            {
                menuHead: "Clothing",
                submenuLinks: [
                    {
                        tab: "All Clothing",
                    },
                    {
                        tab: "Tops and T-Shirts",
                    },
                    {
                        tab: "Jerseys and Kits",
                    },
                    {
                        tab: "Hoodies and Sweatshirts",
                    },
                    {
                        tab: "Jackets and Gilets",
                    },
                    {
                        tab: "Pants and Leggings",
                    },
                    {
                        tab: "Tracksuits",
                    },
                    {
                        tab: "Compression and Base Layer",
                    },
                    {
                        tab: "Shorts",
                    },
                    {
                        tab: "Caps",
                    },
                    {
                        tab: "Socks",
                    },
                    {
                        tab: "Bags and Backpacks",
                    },
                    {
                        tab: "Accessories and Equipment"
                    },
                    {
                        tab: "All Sale Shoes"
                    }
                ]
            },
            {
                menuHead: "Shop By Sport",
                submenuLinks: [
                    {
                        tab: "Running",
                    },
                    {
                        tab: "Football",
                    },
                    {
                        tab: "Basketball",
                    },
                    {
                        tab: "Gym and Training",
                    },
                    {
                        tab: "Yoga",
                    },
                    {
                        tab: "Jordan",
                    },
                    {
                        tab: "Skateboarding",
                    },
                    {
                        tab: "Tennis",
                    },
                    {
                        tab: "Golf",
                    }
                ]
            },
            {
                menuHead: "Shop By Brand",
                submenuLinks: [
                    {
                        tab: "Nike Sportswear",
                    },
                    {
                        tab: "NikeLab",
                    },
                    {
                        tab: "Nike By You",
                    },
                    {
                        tab: "Jordan",
                    },
                    {
                        tab: "ACG",
                    },
                    {
                        tab: "NBA",
                    },
                    {
                        tab: "Nike SB",
                    }
                ]
            },
            {
                menuHead: "Icons",
                submenuLinks: [
                    {
                        tab: "Air Force 1",
                    },
                    {
                        tab: "Pegasus",
                    },
                    {
                        tab: "Blazer",
                    },
                    {
                        tab: "Air Jordan 1",
                    },
                    {
                        tab: "Air Max",
                    }
                ]
            },

        ]
    },
    {
        category: "Women",
        submenu: [
            {
                menuHead: "New & Featured",
                submenuLinks: [
                    {
                        tab: "New Releases",
                    },
                    {
                        tab: "SNKRS Launch Calendar",
                    },
                    {
                        tab: "Member Access",
                    },
                    {
                        tab: "Air Force 1",
                    },
                    {
                        tab: "Couple Wear",
                    },
                    {
                        tab: "Performance Essentials",
                    },
                    {
                        tab: "Bra and Legging Duos",
                    },
                    {
                        tab: "Sustainable Materials",
                    },
                    {
                        tab: "Top Picks Under ₹ 7 500.00",
                    },
                    {
                        tab: "Sale",
                    }
                ]
            },
            {
                menuHead: "Shoes",
                submenuLinks: [
                    {
                        tab: "All Shoes",
                    },
                    {
                        tab: "Lifestyle",
                    },
                    {
                        tab: "Running",
                    },
                    {
                        tab: "Basketball",
                    },
                    {
                        tab: "Jordan",
                    },
                    {
                        tab: "Football",
                    },
                    {
                        tab: "Gym and Training",
                    },
                    {
                        tab: "Skateboarding",
                    },
                    {
                        tab: "Tenning",
                    },
                    {
                        tab: "Sandals and Slides",
                    },
                    {
                        tab: "Customise with Nike By You",
                    },
                    {
                        tab: "All Sale Shoes"
                    }
                ]
            },
            {
                menuHead: "Clothing",
                submenuLinks: [
                    {
                        tab: "All Clothing",
                    },
                    {
                        tab: "Performance Essentials",
                    },
                    {
                        tab: "Sports Bras",
                    },
                    {
                        tab: "Tops and T-Shirts",
                    },
                    {
                        tab: "Jerseys and Kits",
                    },
                    {
                        tab: "Hoodies and Sweatshirts",
                    },
                    {
                        tab: "Jackets and Gilets",
                    },
                    {
                        tab: "Pants and Leggings",
                    },
                    {
                        tab: "Tracksuits",
                    },
                    {
                        tab: "Compression and Base Layer",
                    },
                    {
                        tab: "Shorts",
                    },
                    {
                        tab: "Caps",
                    },
                    {
                        tab: "Socks",
                    },
                    {
                        tab: "Modest Wear",
                    },
                    {
                        tab: "Plus size",
                    },
                    {
                        tab: "Bags and Backpacks",
                    },
                    {
                        tab: "Accessories and Equipment"
                    },
                    {
                        tab: "All  Sale Clothing"
                    }
                ]
            },
            {
                menuHead: "Shop By Sport",
                submenuLinks: [
                    {
                        tab: "Running",
                    },
                    {
                        tab: "Football",
                    },
                    {
                        tab: "Basketball",
                    },
                    {
                        tab: "Gym and Training",
                    },
                    {
                        tab: "Yoga",
                    },
                    {
                        tab: "Jordan",
                    },
                    {
                        tab: "Skateboarding",
                    },
                    {
                        tab: "Tennis",
                    },
                    {
                        tab: "Golf",
                    }
                ]
            },
            {
                menuHead: "Shop By Brand",
                submenuLinks: [
                    {
                        tab: "Nike Sportswear",
                    },
                    {
                        tab: "NikeLab",
                    },
                    {
                        tab: "Nike By You",
                    },
                    {
                        tab: "Jordan",
                    },
                    {
                        tab: "ACG",
                    },
                    {
                        tab: "NBA",
                    },
                    {
                        tab: "Nike SB",
                    }
                ]
            },
            {
                menuHead: "Icons",
                submenuLinks: [
                    {
                        tab: "Air Force 1",
                    },
                    {
                        tab: "Pegasus",
                    },
                    {
                        tab: "Blazer",
                    },
                    {
                        tab: "Air Jordan 1",
                    },
                    {
                        tab: "Air Max",
                    }
                ]
            },

        ]
    },
    {
        category: "Kids",
        submenu: [
            {
                menuHead: "New & Featured",
                submenuLinks: [
                    {
                        tab: "New Releases",
                    },
                    {
                        tab: "Member Access",
                    },
                    {
                        tab: "Air Force 1",
                    },
                    {
                        tab: "Bags and Backpacks",
                    },
                    {
                        tab: "Jordan",
                    },
                    {
                        tab: "Sale",
                    }
                ]
            },
            {
                menuHead: "Boys' Shoes",
                submenuLinks: [
                    {
                        tab: "Older Kids (3-6.5)",
                    },
                    {
                        tab: "Yonder Kids (10-2.5)",
                    },
                    {
                        tab: "Baby and Toddler (1.5-9.5)",
                    },
                    {
                        tab: "Lifestyle",
                    },
                    {
                        tab: "Running",
                    },
                    {
                        tab: "Basketball",
                    },
                    {
                        tab: "Jordan",
                    },
                    {
                        tab: "Football",
                    },
                    {
                        tab: "Sandals and Slides",
                    },
                    {
                        tab: "All Shoes",
                    }
                ]
            },
            {
                menuHead: "Boys' Clothing",
                submenuLinks: [
                    {
                        tab: "Tops and T-Shirts",
                    },
                    {
                        tab: "Hoodies and Sweatshirts",
                    },
                    {
                        tab: "Pants and Leggings",
                    },
                    {
                        tab: "Shorts",
                    },
                    {
                        tab: "All Boys' Clothing",
                    }
                ]
            },
            {
                menuHead: "Girls' Shoes",
                submenuLinks: [
                    {
                        tab: "Older Kids (3–6.5)",
                    },
                    {
                        tab: "Younger Kids (10–2.5)",
                    },
                    {
                        tab: "Baby and Toddler (1.5–9.5)",
                    },
                    {
                        tab: "Lifestyle",
                    },
                    {
                        tab: "Running",
                    },
                    {
                        tab: "Basketball",
                    },
                    {
                        tab: "Football",
                    },
                    {
                        tab: "Sandals and Slides",
                    },
                    {
                        tab: "All Shoes",
                    }
                ]
            }, {
                menuHead: "Girls' Clothing",
                submenuLinks: [
                    {
                        tab: "Tops and T-Shirts",
                    },
                    {
                        tab: "Pegasus",
                    },
                    {
                        tab: "Sports Bras",
                    },
                    {
                        tab: "Hoodies and Sweatshirts",
                    },
                    {
                        tab: "Pants and Leggings",
                    },
                    {
                        tab: "Shorts",
                    },
                    {
                        tab: "All Girls' Clothing",
                    }
                ]
            }, {
                menuHead: "Accessories and Equipment",
                submenuLinks: [
                    {
                        tab: "Balls",
                    },
                    {
                        tab: "Bags and Backpacks",
                    },
                    {
                        tab: "Hats and Headwear",
                    }
                ]
            }, {
                menuHead: "Shop By Sport",
                submenuLinks: [
                    {
                        tab: "Running",
                    },
                    {
                        tab: "Football",
                    },
                    {
                        tab: "Basketball",
                    },
                    {
                        tab: "Gym and Training",
                    },
                    {
                        tab: "Tennis",
                    }
                ]
            },
        ]
    },
    {
        category: "Customise",
        submenu: [
            {
                menuHead: "Featured",
                submenuLinks: [
                    {
                        tab: "Nike By You New Releases",
                    },
                ]
            },
            {
                menuHead: "Nike By You",
                submenuLinks: [
                    {
                        tab: "Men",
                    },
                    {
                        tab: "Women",
                    },
                ]
            },
            {
                menuHead: "By Sport",
                submenuLinks: [
                    {
                        tab: "Lifestyle",
                    },
                    {
                        tab: "Running",
                    },
                    {
                        tab: "Basketball",
                    },
                    {
                        tab: "Football",
                    }
                ]
            },
            {
                menuHead: "Icons",
                submenuLinks: [
                    {
                        tab: "Air Max",
                    },
                    {
                        tab: "Air Force 1",
                    },
                    {
                        tab: "Free",
                    },
                    {
                        tab: "Flyknit",
                    }
                ]
            },
        ]
    },
    {
        category: "Sale",
        submenu: [
            {
                menuHead: "Featured",
                submenuLinks: [
                    {
                        tab: "Shop All Sale",
                    },
                ]
            },
            {
                menuHead: "Men's Sale",
                submenuLinks: [
                    {
                        tab: "Men's Sale",
                    },
                    {
                        tab: "Clothing",
                    },
                ]
            },
            {
                menuHead: "Women's Sale",
                submenuLinks: [
                    {
                        tab: "Shoes",
                    },
                    {
                        tab: "Clothing",
                    }
                ]
            },
            {
                menuHead: "Kids' Sale",
                submenuLinks: [
                    {
                        tab: "Shoes"
                    },
                    {
                        tab: "Clothing"
                    }
                ]
            }
        ]
    }
]


function Header2() {
    const [Index, setIndex] = useState(0);
    const [open, setOpen] = useState(false);
    
    const handleOpen=()=>{
        setOpen(!open);
    }
    

    return (
        <>
            <div className='flex items-center px-8 py-2 ' onMouseLeave={() => setOpen(false)}>
                <div className=' flex lg:flex-1 md:flex-none  flex-1'>
                    <Link href='/' className="flex flex-1">
                        <Image src={NikeLogo} width={56} height={56} alt="" className='' />
                    </Link>
                </div>

                <div className='md:w-full  md:space-x-2 md:text-[18px] md:font-light md:gap-4 md:flex md:flex-1 hidden justify-center'>
                    {
                        NavData.map((items, index) => (
                            <a key={index}>
                                <div className='w-full' onClick={() => { handleOpen(); setIndex(index) }}>{items.category}</div>
                                {open && Index == index ?
                                    (<div className='w-full left-0 flex justify-center absolute  mt-2 bg-slate-50 drop-shadow-md'>
                                        <div>
                                            <div className='md:px-20 flex flex-wrap gap-8 py-4'>
                                                {
                                                    items.submenu.map((navitems, idx) => (
                                                        <div key={idx}>
                                                            <div>
                                                                <div className='text-[16px] font-normal'>{navitems.menuHead}</div>
                                                                <div className='py-2'>
                                                                    {
                                                                        navitems.submenuLinks.map((menuitems, menuindex) => (
                                                                            <div key={menuindex} >
                                                                                <div className='text-[16px] py-1 font-light'> {menuitems.tab}</div>
                                                                            </div>
                                                                        ))
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>) : (<div></div>)}
                            </a>

                        ))
                    }
                </div>
                <div className='md:flex md:items-center hidden'>
                    <div className='flex  items-center rounded-full  lg:bg-gray-100'>
                        <Image src={SearchIcon} width={80} height={80} alt="" className='w-10 h-10 lg:mr-2 py-2 hover:bg-gray-200 rounded-full ' />
                        <form className='lg:flex hidden'>
                            <input placeholder="Search" type="text" className='bg-gray-100 outline-none  text-[14px] font-light' />
                        </form>
                    </div>

                    <div className='flex items-center lg:px-8 lg:gap-4'>
                        <Link href='/favourite'>
                            <Image src={Heart} width={80} height={80} alt="" className='w-10 h-10 py-2 hover:bg-gray-200 rounded-full ' />
                        </Link>
                        <Link href='/cart'>
                            <Image src={Cart} width={80} height={80} alt="" className='w-10 h-10  py-2 hover:bg-gray-200 rounded-full ' />
                        </Link>
                    </div>
                </div>

                <div className='md:hidden flex items-center'>
                    <div className='flex items-center gap-4'>
                        <Image src={Cart} className="w-10 h-10 p-2 hover:bg-gray-200 rounded-full" alt='' />
                        <Image src={SearchIcon} className="w-10 h-10 p-2 hover:bg-gray-200 rounded-full" alt='' />
                        <Image src={MenuBars} className="w-10 h-10 p-2 hover:bg-gray-200 rounded-full" alt='' />
                    </div>
                </div>
            </div>
            {/* <div className='md:hidden flex absolute top-0 left-[60%]  w-full max-h-screen border'>
                jerjk
            </div> */}
        </>
    )
}

export default Header2