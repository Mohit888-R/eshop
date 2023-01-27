import Head from 'next/head'
import Image from 'next/image';
import Header1 from "../components/home/header/Header1";
import Header2 from "../components/home/header/Header2";

export default function Home() {
    return (
        <div>
            <Header1 />
            <Header2 />
        </div>
    )
}