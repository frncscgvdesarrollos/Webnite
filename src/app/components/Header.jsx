'use client'
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-blue-500 md:p-10  lg:py-2 bg-blue-400 bg-opacity-90 header-container">
            <div className="container w-[400px] lg:w-full  m-auto flex my-auto lg:items-center lg:justify-around  -top-16 md:top-0 lg:top-0 relative">
                <div className="flex items-start lg: items-center gap-2 lg:gap-10  lg:gradient lg:rounded-lg lg:p-2 lg:-translate-x-[60%]">
                    <a href="/"><Image src="/logoWebnite.png" width={200} height={200} alt="Logo" className=' md:w-[100px] md:h-[100px] lg:w-[200] lg:h-[200]' /></a>
                    <h1 className="text-2xl lg:text-5xl  lg:text-4xl text-white font-bold tracking-wider  lg:ml-0 text-yellow-500 hover:text-yellow-400">Webnite.</h1>
                </div>
                <div className='opacity-0 lg:opacity-100'>
                <nav className="lg:flex items-center space-x-2 lg:space-x-4 borde-titulo2 bg-blue-400 p-4 my-10 rounded-lg mr-10 lg:translate-x-[60%]">
                    <a href="#about" className="text-lg text-white hover:text-yellow-300">About</a>
                    <a href="#how" className="text-lg text-white hover:text-yellow-300 transition-all">How we work</a>
                    <a href="#contact" className="text-lg text-white hover:text-yellow-300">Contact</a>
                    <div className="link-container">
                        <a href="#" className="text-lg text-orange-200 hover:text-yellow-300 hover:underline">
                            Explore Synergy
                        </a>
                        <span className="hidden info text-lg text-white">for IT workers</span>
                    </div>
                </nav>
                </div>
                <div className="h-[40px] top-1 my-auto lg:hidden text-white items-center text-xl justify-center flex bg-blue-500 p-2 rounded-lg border-l-2 border-b-2 border-white relative translate-x-20 z-[999]">
                    <button onClick={toggleMenu} className="text-gray-200 focus:outline-none ">
                        <svg className="h-4 w-4 lg:h-6 lg:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Menú desplegable para móviles */}
            <nav className={`lg:hidden ${isOpen ? 'block' : 'hidden'} text-center absolute top-0 left-0 w-full h-screen bg-blue-500`}>
                <ul className="flex flex-col gap-4 justify-center items-center h-full">
                    <li><a href="#" className="text-lg text-white py-2 px-4 rounded-lg hover:bg-blue-400 block">About</a></li>
                    <li><a href="#" className="text-lg text-white py-2 px-4 rounded-lg hover:bg-blue-400 block">How we work</a></li>
                    <li><a href="#" className="text-lg text-white py-2 px-4 rounded-lg hover:bg-blue-400 block">Contact</a></li>
                    <div className="link-container">
                        <a href="#" className="text-lg text-orange-200 hover:text-yellow-300 hover:underline">
                            Explore Synergy  <span className="info text-lg text-white"> <br/> for IT workers</span>
                        </a>
                    </div>
                </ul>
            </nav>
        </header>
    );
}
