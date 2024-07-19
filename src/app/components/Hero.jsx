export default function Hero(){
    
    return(
        <div>
            <video 
                src="./VHero.mp4"
                autoPlay
                loop
                muted
                className="-top-16 relative"

            />
            <div className="container-hero">
                {/* <h1 className="text-white text-6xl ml-10">Webnite</h1> */}
                <div className="website-factory text-white absolute top-4 hover:-top-56 transition-all duration-9000 text-center 
                text-5xl ml-10 mt-16 bg-blue-700 w-2/5 h-[500px] p-2 rounded-lg factory-container">
                    <h2 className="tracking-wider bg-blue-900 bg-opacity-90 font-bold  rounded-lg p-4 text-xl lg:text-4xl ">Website factory</h2>
                    <ul className="text-left text-white text-lg bg-cyan-900 rounded-lg p-4 bg-opacity-90 mt-10">
                        <li>
                            Rapid and Frequent Delivery
                        </li>
                        <li>
                            Transparency
                        </li>
                        <li>
                            Continuous Improvement
                        </li>
                        <li>
                            Risk Reduction
                        </li>
                        <li>
                            Increased Customer Satisfaction
                        </li>
                    </ul>
                    {/* <span className="text-left text-white text-base bg-gray-900 rounded-lg p-4 bg-opacity-60">Stay competitive, strengthen your business or begin a new enterprise.</span> */}
                </div>
                <div className="bg-gray-900 top-44 relative w-screen h-[450px] flex justify-evenly items-start">
                    <span className="text-white text-2xl font-bold text-center relative top-12 ">
                        Innovation and technology at the service of your projects.
                    </span>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-10 w-40 h-10">Contact now</button>
                    
                </div>
                {/* <hr className="border-1 border-white"/> */}
                <span className="text-white text-3xl -top-20 text-center relative top-6 block underline">
                    Tailored software development that aligns with your goals and adapts to your needs.
                </span>

            </div>
        </div>
    )
}

