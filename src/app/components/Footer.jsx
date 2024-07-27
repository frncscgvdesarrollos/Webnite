export default function Footer() {
    return (
        <footer className="bg-gray-900 flex flex-col md:flex-row relative w-full h-auto md:h-[500px] p-6 md:p-0">
            <div className="flex flex-col justify-center w-full gap-4 items-center md:items-start md:ml-10">
                <div className="flex flex-col md:flex-row items-center gap-2 my-10 md:justify-start">
                    <img src="/logoWebnite.png" className="w-[100px] h-[100px]" />
                    <div className="flex flex-col justify-center items-center gap-4 md:items-start">
                        <h2 className="text-white text-xl md:text-6xl text-yellow-500 font-bold transition hover:text-yellow-200">Webnite.</h2>
                        <hr className="w-[300px] h-[5px] bg-yellow-400" />
                        <h3 className="text-white text-3xl text-yellow-500 font-semibold transition hover:text-yellow-200">Websites factory.</h3>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start mt-5 gap-4">
                    <span className="text-white text-base md:text-3xl text-yellow-500 font-semibold transition hover:text-yellow-200 underline">Follow us on</span>
                    <img src="/instagram.jpg" className="w-[50px] h-[50px] border-b-2 border-violet-700 transition hover:text-yellow-200 rounded-lg shadow-yourdear" />
                    <img src="/whasap.jpeg" className="w-[50px] h-[50px] border-b-2 border-green-700 transition hover:text-yellow-200 rounded-lg shadow-yourdear" />
                </div>
            </div>
            <hr className="hidden md:block w-[5px] bg-yellow-500 mx-10 my-40 rotate-90" />
            <section className="flex flex-col items-center md:items-start my-10 md:my-0 md:ml-10">
                <ul className="flex flex-col text-base gap-4 mt-10 text-left">
                    <li>
                        <h3 className="text-white text-base md:text-3xl text-yellow-500 font-semibold transition hover:text-yellow-200">Company</h3>
                    </li>
                    <li>
                        <h3 className="text-white text-base md:text-3xl text-yellow-500 font-semibold transition hover:text-yellow-200">Services</h3>
                    </li>
                    <li>
                        <h3 className="text-white text-base md:text-3xl text-yellow-500 font-semibold transition hover:text-yellow-200">About</h3>
                    </li>
                    <li>
                        <h3 className="text-white text-base md:text-3xl text-yellow-500 font-semibold transition hover:text-yellow-200">Contact</h3>
                    </li>
                </ul>
            </section>
        </footer>
    );
}
