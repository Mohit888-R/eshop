import React from 'react';
import Head from 'next/head'
import Image from 'next/image';
import Header1 from "../components/home/header/Header1";
import Header2 from "../components/home/header/Header2";
import Section1 from '../components/home/section/section1';
import Footer from "../components/home/Footer/footer";

export default function Home() {
    return (
        <div>
            <Header1 />
            <Header2 />
            <Section1 />
            <Footer/>
        </div>
    )
}