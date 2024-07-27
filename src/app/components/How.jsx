// import Image from "next/image";

export default function HowWeWork () {
    return (
        <div className="h-fit bg-blue-900 how-container flex flex-col lg:-top-28">
            <h1 className="howh2 ml-auto mr-[10%] text-yellow-500 relative text-4xl   md:text-4xl md:text-6xl font-bold hover:text-yellow-200 " id="how">How we work.</h1>
            {/* <span classname="absolute z-[999] text-3xl text-blue-500 top-20"> aaaa </span> */}

            <div className="text-center text-yellow-500">
            <hr className="w-[200px] md:w-[90%] h-[5px] bg-yellow-500 z-[999] line line-mobile1 "></hr>
            <hr className="w-[300px] md:w-[63%] h-[5px] bg-yellow-500 z-[999] -top-[210px]  relative line line-mobile2 "></hr>
            <hr className="w-[400px] md:w-[50%] h-[5px] bg-yellow-500 z-[999] top-[90px]  relative line line-mobile3"></hr>
            <span className=" opacity-0 lg:opacity-100 transition-all duration-2000  bg-yellow-500 w-[100px] h-[100px] rounded-full z-[999] absolute top-52 left-20 ball  border-l-2 border-white ">C</span>

            <span className=" opacity-0 lg:opacity-100 transition-all duration-2000 bg-yellow-500 w-[100px] h-[100px] rounded-full z-[999] absolute -top-[1%] left-[12.5%] ball border-l-2 border-white "></span>

            <span className=" bg-yellow-500 w-[100px] h-[100px] rounded-full z-[999] absolute top-[5%] left-[33%] -top-[8%] ball border-l-2 border-white -translate-x-44">4</span>
            <span className="opacity-0 lg:opacity-100 transition-all duration-2000 bg-yellow-500 w-[100px] h-[100px] rounded-full z-[999] absolute  left-[34.5%] -top-[3%] ball border-l-2 border-white">5</span>
            <span className="bg-yellow-500 w-[100px] h-[100px] rounded-full z-[999] absolute  left-[52%] top-[-6%] ball border-l-2 border-white -translate-x-36 ">6</span>
            <span className=" bg-yellow-500 w-[100px] h-[100px] rounded-full z-[999] absolute  left-[65%] top-[3%] ball border-l-2 border-white -translate-x-36">7</span>
            </div>
            <div className="text-center text-white mt-60 animationWeContainer">
                <h3 className="text-white animationWe relative transition-all duration-2000 text-3xl md:text-6xl font-bold z-[999] ">We are ready to help you</h3>
                <h3 className="text-white animationWe  text-2xl md:text-6xl font-bold z-[999]">with your project.</h3>
                <h4 className="text-white animationWe text-xl md:text-3xl font-bold z-[999]">Let's get started.</h4>
            </div>


            <div className="grid grid-cols-6 md:grid-cols-5 mx-auto mt-20 md:-mt-20 lg:-mt-40 w-full  grid-how  z-[999] gap-2 bg-opacity-70 mx-auto gap-10 md:gap-20 md:p-20 lg:p-52">
            <div className="col-start-1 hover:col-end-3  row-start-4 -rotate-12 scale-150">
                <img src="/avion.jpeg" className="h-[150px] w-[200px] relative -top-20 border-b-2 border-yellow-200 border-l-2 shadow-yourdear rounded-lg ml-20 opacity-0 lg:opacity-100  "/>
            </div>

            <div className="col-start-1 rounded-lg  col-end-4 md:col-end-3 md:hover:col-end-3  hover:my-10 hover:col-end-5 shadow-yourdear col-span-2 row-start-1 bg-yellow-500 h-[200px] border-r-4 border-b-4 border-blue-100 hover:rotate-12 ">
                <div  className="meeting-background">
                <h5 className=" text-white font-bold bg-blue-900 bg-opacity-90 text-3xl ml-0 hover:ml-12 transition-all duration-3000">Meeting</h5>
                <p className="text-white mt-2 px-10 text-base md:text-xl  my-auto  py-4 contente-box ">Unimos ideas y colaboramos para definir objetivos claros y estrategias efectivas en nuestras reuniones<br/>  iniciales.</p>
                </div>
            </div>  

            <div className="col-start-1 rounded-lg  col-end-5 md:col-end-4 hover:col-end-6 md:hover:col-end-4 md:hover:my-0  hover:my-10 md:col-start-2  shadow-yourdear col-span-2 row-start-2 bg-yellow-500 h-[200px] relative border-r-4 border-b-4 border-blue-100 hover:rotate-12">
                <div className="desing-background">
                <h5 className="text-white font-bold bg-blue-900 bg-opacity-90 text-3xl ml-0 hover:ml-12 transition-all duration-3000">Design</h5>
                <p className="text-white mt-2 px-4 text-base md:text-xl my-auto py-4">Convertimos conceptos en realidad visual, creando diseños  innovadores y atractivos   que capturan la  esencia de   tu marca.</p>
                </div>
            </div>

            <div className="col-start-1 rounded-lg md:col-end-5 col-end-6 md:hover:col-end-5 hover:col-end-7 md:col-start-3 shadow-yourdear shadow-yourdear col-span-2   row-start-3 bg-yellow-500 h-[200px] relative border-r-4 border-b-4 border-blue-100 hover:rotate-12">
                <div className="development-background">
                <h5 className="text-white font-bold bg-blue-900 bg-opacity-90 text-3xl ml-0 hover:ml-12 transition-all duration-3000">Development</h5>
                <p className="text-white mt-2 px-4 text-base md:text-xl my-auto">Transformamos los diseños en soluciones funcionales y escalables, utilizando <br/> las últimas tecnologías.</p>
                <br/>
                <br/>
                </div>
            </div>

                <div className="col-start-1 col-end-7 md:col-end-6 md:hover:col-end-6 hover:col-end-8 md:col-start-4 shadow-yourdear col-span-2 row-start-4 bg-yellow-500 rounded-lg h-[200px]  border-r-4 border-b-4 border-blue-100 hover:rotate-12 ">
                    <div className="deployment-background">
                    <h5 className="text-white font-bold bg-blue-900 bg-opacity-90 text-3xl ml-0 hover:ml-12 transition-all duration-3000">Deploy</h5>
                    <p className="text-white mt-2 px-4 text-lg my-5 md:text-xl my-auto">Desplegamos soluciones de software a medida y manteniendo la seguridad de tu negocio.</p>
                    </div>
                </div>

                <div className="col-start-5 row-start-1 bg-cyan-400 h-fit  scale-150 border-r-2 border-b-2 border-blue-100 rotate-12 rounded-lg opacity-0 lg:opacity-100">
                      <img src="/YOURDEARYOU.png" alt="a" className="yourdear shadow-yourdear mr-20 opacity-0 lg:opacity-100"/>
                </div>

            </div>


        </div>
    )
}

