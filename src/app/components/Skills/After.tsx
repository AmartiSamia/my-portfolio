export default function Skills(){
  return(<>
   <main className=" mb-90 flex max-sm:ml-[-10px] lg:ml-[-50px] max-sm:mt-[80px] flex-row max-sm:flex-wrap sm:ml-5 max-sm:flex-row md:flex-row items-start ml-[-15px] md:p-12 lg:gap-12 sm:gap-4 md:ml-[-40px] md:gap-1">
          <div className="md:w-2/3 sm:w-1/2 sm:mx-8 max-sm:w-full">
                 <h1 className="text-[#64ffda] text-xl font-bold mb-4 flex items-center">
                  <span id="Name" className="text-3xl font-[300]">04.</span>
                  <span id="Name" className="text-[#ccd6f6] text-3xl ml-2">Credentials I've Earned</span>
                  <hr className="flex-grow border-t border-[#8892b0bd] ml-4" />
              </h1>
              </div>
  <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-80">
      <div className="flex justify-between items-center mb-4">
          <i className="fas fa-folder text-green-400 text-2xl"></i>
          <div className="flex space-x-2">
              <i className="fas fa-code-branch text-gray-400"></i>
              <i className="fas fa-external-link-alt text-gray-400"></i>
          </div>
      </div>
      <h2 className="text-xl font-bold mb-2">Time to Have More Fun</h2>
      <p className="text-gray-400 mb-4">A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS</p>
      <div className="text-gray-500 text-sm">
          <span className="mr-2">Next.js</span>
          <span className="mr-2">Tailwind CSS</span>
          <span>Firebase</span>
      </div>
  </div>
  </main></>
  )
}