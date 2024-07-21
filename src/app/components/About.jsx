import Image from "next/image";

export default function About(){
    return(
        <div className="h-[1200px] bg-blue-500 about-container perspective-container">
            <h2 className="abouth2 text-6xl font-bold text-white hover:text-yellow-200">About.</h2>
            <div className="text-white py-16 px-6 mt-28 p-20 flex flex-col gradient rounded-lg p-10 m-10">
                <div className="flex gap-10 ">
                <div className="mb-4  rounded-lg p-4 shadow-lg w-3/5 ml-18 mr-auto bg-blue-900 element-rotate pb-16 border-b-4 border-white shadowVision2">
                    <h3 className="text-3xl font-bold tracking-wide  text-center">Mission</h3>
                    <p className="text-white text-justify  h-full mt-4 text-lg bg-gray-600 p-4 rounded-lg">Our mission is to provide innovative and high-quality web solutions that drive the growth and success of our clients. We are committed to delivering personalized services that meet the unique needs of each business, using the latest technologies and industry practices.</p>
                </div>
                <Image src={"/MVV.jpeg"} alt="values" width={300} height={300}  className="rounded-lg border-t-2 border-white border-r-2  shadow-lg mr-36 ml-28 rotate-12 relative -top-56 imagen-about" />
                </div>
                <div className="flex perspective-container2">
                <div className="mb-4 w-2/5 ml-auto bg-gray-600 shadowVision h-fit rounded-lg p-4  mt-32 mb-20 shadow-lg element-rotate border-l-4 border-b-2 border-yellow-200">
                    <h3 className="text-3xl font-bold ml-20">Vision</h3>
                    <p className="text-white text-justify mt-4 text-lg bg-blue-900 p-4 rounded-lg">Our vision is to be leaders in web development, recognized for our creativity, technical excellence, and client-centric approach. We aspire to create a digital world where all businesses, regardless of size, can access advanced web tools to enhance their online presence and achieve their business goals.</p>
                </div>
                    <div className="mb-4 -mt-48 flex flex-col w-2/5 bg-blue-700 h-fit border-t-2   rounded-lg p-4 h-fit  mx-auto shadow-lg element-rotate2 border-l-2 border-white ">
                        <h3 className="text-3xl font-bold mb-4 element-rotate2 text-center ">Values</h3>
                        <ul className="list-none list-inside value-container-perspective text-white text-justify mt-4  h-[500px] flex flex-col w-full text-lg gap-6 mx-auto " >
                            <div className="flex flex-col value-container justify-center items-center mx-auto gap-6 hover:gap-16 transition-all duration-1000">
                                <li className="relative top-6 bg-gray-600 rounded-lg p-4 border-2 border-white rotate-[6deg]  hover:rotate-[360deg] transition-all duration-1000"><strong>Innovation:</strong><br/> We strive to be at the forefront of technology, constantly seeking new ways to improve and offer creative and effective solutions.</li>
                                <li className="relative -top-6 bg-gray-700 bg-opacity-50 text-center rounded-lg p-4 border-2 border-white hover:rounded-full hover:bg-opacity-100 hover:bg-yellow-500 hover:w-1/2 hover:traslate-x-1/2 hover:-translate-y-1/4 hover:scale-110 transition-all duration-1000 -rotate-[6deg] hover:text-small "><strong>Quality:</strong><br/> We are committed to delivering products and services of the highest quality, ensuring total customer satisfaction.</li>
                                <li className="relative -top-20 bg-gray-600 rounded-lg p-4 border-2 border-white rotate-[6deg] hover:rotate-0 hover:bg-opacity-0  transition-all duration-1000"><strong>Transparency:</strong><br/> We foster open and honest communication both internally and with our clients, building relationships of trust and respect.</li>
                                <li className="relative -top-40  bg-gray-700 bg-opacity-50 rounded-lg p-4 border-2 border-white  relative transition-all duration-1000 -rotate-[6deg] text-center"><strong>Collaboration:</strong><br/> We believe in the power of teamwork and synergy, working closely with our clients and within our organization to achieve the best results.</li>
                            </div>
                            {/* <div className="flex gap-6">
                            <li className="rounded-lg bg-blue-500 p-4 border-2 w-2/5 border-white"><strong>Customer Orientation:</strong><br/> Our primary focus is to understand and meet the needs of our clients, providing solutions that truly add value to their businesses.</li>
                            </div> */}
                        </ul>
                    </div>
                    </div>
            </div>
        </div>
    )
}
