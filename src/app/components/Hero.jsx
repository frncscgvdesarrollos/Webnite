export default function Hero() {
    return (
      <div className="flex flex-col h-screen bg-gray-900 bg-opacity-90 text-white ">
        <video 
          src="./VHero.mp4"
          autoPlay
          loop
          muted
          className="relative w-[500px] md:w-full mx-auto h-fit md:h-[600px] lg:h-[700px] object-contain md:object-cover lg:object-cover top-3 left-0"
        />
        <div className="relative md:top-36 lg:top-5 flex flex-col bg-gray-900 md:bg-opacity-0 p-10 md:p-20 lg:p-0  rounded-lg h-fit">
          <div className="md:bg-blue-500 w-full text-center p-2 md:ml-[7%] md:w-[400px] lg:w-[600px] z-[999] -top-5 lg:-top-20 lg:z-index[990] relative rounded-lg ">
            <h2 className="text-yellow-500 font-semibold text-4xl md:text-4xl lg:text-6xl md:bg-blue-900 rounded-lg p-2 z-[985]">Websites factory</h2>
          </div>
          <div className="bg-gray-900 flex flex-col h-fit">
          <div className="flex flex-col md:flex-row lg:flex-row  w-full p-10 bg-gray-900 -top-4 lg:-top-24 relative lg:z-[999]" >
            <span className="text-left font-semibold text-xl md:text-3xl lg:text-4xl my-5 md:ml-[7%] lg:ml-[5%] lg:my-10"  >
              Innovation and technology at the service of your projects.
            </span>
            <button className="bg-blue-500 md:text-3xl lg:text-4xl lg:mr-36 text-white p-2 rounded-lg w-2/5 md:w-fit lg:w-fit ml-auto h-fit my-14 md:my-auto" >Contact now</button>
          </div>
          <span className="text-2xl md:text-4xl p-10  text-center bg-blue-500 md:bg-gray-900 md:my-20 relative md:-top-28 rounded-lg z-[990] mb-14">
            Tailored software development that aligns with your goals and adapts to your needs.
          </span>
          </div>
        </div>
      </div>
    );
  }
  