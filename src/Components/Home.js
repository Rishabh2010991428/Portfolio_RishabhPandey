import React from 'react'
import "./Body.css";

function Home() {
    return (
        <div className='home'>
            <section className="home text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-col">
                    <div className="lg:w-4/6 mx-auto py-20">
                        <div className="flex flex-col sm:flex-row mt-10">
                            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <div className="w-25 h-25 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
                                    <img src="https://tse4.mm.bing.net/th?id=OIP.BMFtPuyeulM2z9bG1vRzEQHaHa&pid=Api&P=0" />
                                </div>
                                <div className="flex flex-col items-center text-center justify-center">
                                    <h2 className="font-medium title-font mt-4 text-white text-lg">Rishabh Pandey</h2>
                                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                    <h3 className='my-2 text-white'><b>Full Stack Devloper</b></h3>
                                    <p className="text-base text-gray-400">Growth oriented person who is passionate about learning new
                                        technologies and mastering new skills</p>
                                </div>
                            </div>
                            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <p className="leading-relaxed text-lg mb-4">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.</p>
                                <div className="p-2 w-full">
                                    <button className="flex mx-auto text-black bg-yellow-300 border-0 py-2 px-8 focus:outline-none hover:bg-blue-900 rounded text-lg">Download resume</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home