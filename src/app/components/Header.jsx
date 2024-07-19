'use client'
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-blue-500 py-4 header-container">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo y título */}
                <div className="flex items-center gap-4">
                    <Image src="/logoWebnite.png" width={60} height={60} alt="Logo" className='ml-8' />
                    <h1 className="text-5xl  lg:text-4xl text-white font-bold tracking-wider">Webnite.</h1>
                    {/* <h2 className="text-xl lg:text-2xl text-white">Fullstack website factory</h2> */}
                </div>

                {/* Menú principal */}
                <nav className=" lg:flex items-center space-x-2 lg:space-x-4 borde-titulo2">
                    <a href="#" className="text-lg text-white hover:text-yellow-300">About</a>
                    <a href="#" className="text-lg text-white hover:text-yellow-300">How we work</a>
                    <a href="#" className="text-lg text-white hover:text-yellow-300">Contact</a>
                    <div className="link-container">
                        <a href="#" className="text-lg text-orange-200 hover:text-yellow-300 hover:underline">
                            Explore Synergy
                        </a>
                        <span className="info text-lg text-white">for IT workers</span>
                    </div>


                </nav>

                {/* Icono hamburguesa para móviles */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-gray-200 focus:outline-none">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            <nav className={`lg:hidden ${isOpen ? 'block' : 'hidden'} mt-4`}>
                <ul className="flex flex-col gap-4">
                    <li><a href="#" className="text-lg text-white py-2 px-4 rounded-lg hover:bg-blue-400 block">About</a></li>
                    <li><a href="#" className="text-lg text-white py-2 px-4 rounded-lg hover:bg-blue-400 block">Contact</a></li>
                    <li><a href="#" className="text-lg text-white py-2 px-4 rounded-lg hover:bg-blue-400 block">Contribute</a></li>
                </ul>
            </nav>
        </header>
    );
}
