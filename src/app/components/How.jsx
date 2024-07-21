// import Image from "next/image";

export default function HowWeWork () {
    return (
        <div className="h-[1000px] bg-blue-900 how-container flex flex-col">
            <h1 className="howh2 text-6xl font-bold hover:text-yellow-200 ">How we work.</h1>
            <hr className="w-[1220px] h-[5px] bg-yellow-500 z-[999]  "></hr>
            {/* <span classname="absolute z-[999] text-3xl text-blue-500 top-20"> aaaa </span> */}

            <div className="text-center text-yellow-500">
            <hr className="w-[500px] h-[5px] bg-yellow-500 z-[999] top-[210px]  relative"></hr>
            <hr className="w-[800px] h-[5px] bg-yellow-500 z-[999] top-[90px]  relative"></hr>
            <span className="bg-yellow-500 w-[100px] h-[100px] rounded-full z-[999] absolute top-52 left-20">C</span>

            <span className="bg-yellow-500 w-[100px] h-[100px] rounded-full z-[999] absolute top-16 left-44 "></span>

            <span className="bg-yellow-500 w-[100px] h-[100px] rounded-full z-[999] absolute  left-[32%] -top-[3%]">4</span>
            <span className="bg-yellow-500 w-[100px] h-[100px] rounded-full z-[999] absolute  left-[24%] top-[11.5%]">5</span>
            <span className="bg-yellow-500 w-[100px] h-[100px] rounded-full z-[999] absolute  left-[46%] -top-[10%]">6</span>
            <span className="bg-yellow-500 w-[100px] h-[100px] rounded-full z-[999] absolute  left-[55%] top-[3%]">7</span>
            </div>


        </div>
    )
}

