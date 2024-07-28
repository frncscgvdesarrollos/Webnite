
function Card({ title, children, TWClasses, BGClass, refElement }) {
    return (
        <div
            ref={refElement}
            className={`${"rounded-lg transition-all duration-[1500ms] shadow-yourdear bg-yellow-500 h-[200px] border-r-4 border-b-4 border-blue-100 hover:my-10 hover:rotate-12"} ${BGClass} ${TWClasses}`}
        >

            <div>  {/*className={BGClass}*/}

                <h5 className=" text-white font-bold bg-blue-900 bg-opacity-90 text-3xl ml-0 hover:ml-12 transition-all duration-[3000ms]">{title}</h5>

                <p className="text-white mt-2 px-10 text-base md:text-xl  my-auto  py-2 contente-box 
                transition-all duration-[3000ms] font-semibold drop-shadow-md">

                    {children}

                </p>

            </div>

        </div >
    )
}

export default Card