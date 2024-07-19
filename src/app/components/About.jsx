export default function About(){
    return(
        <div className="h-[1200px] bg-blue-500 about-container">
            <h2 className="abouth2 text-6xl font-bold text-white hover:text-yellow-200">About.</h2>
            <div className="text-white p-4 mt-28 p-20 flex flex-col">
                <div className="flex gap-10">
                <div className="mb-4 border-2 border-white rounded-lg p-4 shadow-lg w-2/5 ml-20 mr-auto bg-blue-900">
                    <h3 className="text-3xl font-bold">Mission</h3>
                    <p className="text-white text-justify mt-4 text-lg">Our mission is to provide innovative and high-quality web solutions that drive the growth and success of our clients. We are committed to delivering personalized services that meet the unique needs of each business, using the latest technologies and industry practices.</p>
                </div>
                </div>
                <div className="mb-4 w-2/5 ml-auto border-2 border-white rounded-lg p-4 mr-24 -mt-40 shadow-lg bg-blue-700">
                    <h3 className="text-3xl font-bold">Vision</h3>
                    <p className="text-white text-justify mt-4 text-lg">Our vision is to be leaders in web development, recognized for our creativity, technical excellence, and client-centric approach. We aspire to create a digital world where all businesses, regardless of size, can access advanced web tools to enhance their online presence and achieve their business goals.</p>
                </div>
                <div className="mb-4 mt-10 flex flex-col justify-center items-center   border-2 border-white rounded-lg p-4 w-4/5 mx-auto shadow-lg bg-blue-700">
                    <h3 className="text-3xl font-bold text-center mb-4 ">Values</h3>
                    <ul className="list-none list-inside text-white text-justify mt-4 flex flex-col justify-center items-center text-lg gap-6 mx-auto " >
                        <div className="flex justify-center items-center mx-auto gap-6">
                        <li className="rounded-lg bg-blue-900 p-4 border-2 w-2/5 border-white"><strong>Innovation:</strong><br/> We strive to be at the forefront of technology, constantly seeking new ways to improve and offer creative and effective solutions.</li>
                        <li className="rounded-lg bg-blue-800 p-4 border-2 w-2/5 border-white"><strong>Quality:</strong><br/> We are committed to delivering products and services of the highest quality, ensuring total customer satisfaction.</li>
                        </div>
                        <div className="flex gap-6">
                        <li className="rounded-lg bg-blue-700 p-4 border-2 w-2/5 border-white"><strong>Transparency:</strong><br/> We foster open and honest communication both internally and with our clients, building relationships of trust and respect.</li>
                        <li className="rounded-lg bg-blue-600 p-4 border-2 w-2/5 border-white"><strong>Collaboration:</strong><br/> We believe in the power of teamwork and synergy, working closely with our clients and within our organization to achieve the best results.</li>
                        <li className="rounded-lg bg-blue-500 p-4 border-2 w-2/5 border-white"><strong>Customer Orientation:</strong><br/> Our primary focus is to understand and meet the needs of our clients, providing solutions that truly add value to their businesses.</li>
                        </div>

                    </ul>
                </div>
            </div>
        </div>
    )
}
