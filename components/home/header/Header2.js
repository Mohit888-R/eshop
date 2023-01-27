import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NikeLogo from "../../../assets/nikeLogo.png";

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
    },
    {
        category: "Customise",
    },
    {
        category: "Sale",
    },
    {
        category: "SNKRS",
    },
]

function Header2() {
    return (
        <div className='flex items-center px-8 py-2 '>
            <a href='/jordan' className="flex flex-1">
                <Image src={NikeLogo} width={56} height={56} alt="" className='' />
            </a>
            <div className='space-x-2 text-[12px]'>
                <Link href="/membership" className='hover:opacity-60'>Join Us</Link>
                <span className='border-l border-black text-[10px]'></span>
                <Link href='/member/profile/login' className='hover:opacity-60'>Sign In</Link>
            </div>
        </div>
    )
}

export default Header2