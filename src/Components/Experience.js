import React from 'react'
import "./Body.css";
function Experience() {
  return (
    <div>
      <h1 className='Section-heading text-center'>Work Experience And Organizations</h1>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <img src="https://tse1.mm.bing.net/th?id=OIP.w9DKF3YPCuhGD6Eh8mM_1AHaHa&pid=Api&P=0"/>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2"><span>Technical Assistant</span> <span className='mx-5 italic'>01/2021 - 03/2021</span></h2>
              <h1 className="text-gray-700 text-lg title-font font-medium mb-2">WannaBae (Product of PAGE-IT Co.)</h1>
              <h4 className="text-gray-700 text-lg title-font font-small mb-2">Achievements and Tasks:</h4>
              <p className="leading-relaxed text-base">• Worked on front-end design.</p>
              <p className="leading-relaxed text-base">• Learnt technologies like Git and bitbucket.</p>
              <p className="leading-relaxed text-base">• Promoted, worked on strategies and marketed events
                on-ground.</p>
              <p className="leading-relaxed text-base">• Got to learn about the start-up culture from the founder.</p>
              <p className="leading-relaxed text-base">• Got performance based bonuses.</p>
              <button className="btn btn-outline-warning my-3 bold" type="submit">View Credential</button>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <img src="https://tse2.mm.bing.net/th?id=OIP.nAlj8B7fjjzqyeUP0aJm0wHaHY&pid=Api&P=0"/>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2"><span>Organizing Executive</span> <span className='mx-5 italic'>07/2021 - Present</span></h2>
              <h1 className="text-gray-700 text-lg title-font font-medium mb-2">IE(I) Student Chapter Chitkara University</h1>
              <h4 className="text-gray-700 text-lg title-font font-small mb-2">Organized and promoted events held inside campus like:</h4>
              <p className="leading-relaxed text-base">• Cultural events having outdoor activities with huge
                participation.
              </p>
              <p className="leading-relaxed text-base">• Industrial visit of IEI members to Emicon Advisory
                Services LLP, Mohali. </p>
              <p className="leading-relaxed text-base">• Designed strategies and ideas for organizing cultural
                events. </p>
              <p className="leading-relaxed text-base">• An expert talk with speaker Mr. Aman Dhattarwal with a
                audience of 1000+ students.</p>
              <p className="leading-relaxed text-base">• Journey from research to patent grant with 300+
                audience.</p>
              <p className="leading-relaxed text-base">• And many more</p>
              <button className="btn btn-outline-warning my-3 bold" type="submit">View Credential</button>
            </div>
          </div>


        </div>
      </section>
    </div>
  )
}

export default Experience