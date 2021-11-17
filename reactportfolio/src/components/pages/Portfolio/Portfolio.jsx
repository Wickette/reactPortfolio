import React from 'react'
import "./portfolio.scss"

const Portfolio = () => {
    return (
        <div className="portfolio">
                
                <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mb-12">
        <article>
            <h2 class="text-6xl my-10 font-extrabold text-yellow-100">PROJECTS</h2>
            <hr class="mb-6 p-1 bg-green-100" />
            <section class="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
                <div>
                    <article class="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out mb-4" >
                        <div class="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                        <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                            <h3 class="text-center">
                                <a class="text-white text-2xl font-bold text-center"
                                    href="https://wickette.github.io/HappeningWeather/" target="blank">
                                    <span class="absolute inset-0"></span>
                                    happeningWeather App
                                </a>
                            </h3>
                        </div>
                    </article>
                    <a class="text-yellow-100 mx-36" href="https://github.com/Wickette/HappeningWeather.git"
                        target="blank">GitHub Code</a>
                </div>
                <div>
                    <article class="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out mb-4
              " >
                        <div class="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                        <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                            <h3 class="text-center">
                                <a class="text-white text-2xl font-bold text-center"
                                    href="https://wickette.github.io/Daily_Work_Scheduler/" target="blank">
                                    <span class="absolute inset-0"></span>
                                    Work-Day Scheduler
                                </a>
                            </h3>
                        </div>
                    </article>
                    <a class="text-yellow-100 mx-36" href="https://github.com/Wickette/Daily_Work_Scheduler.git"
                        target="blank">GitHub Code</a>
                </div>
                <div>
                    <article class="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out mb-4" >
                        <div class="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                        <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                            <h3 class="text-center">
                                <a class="text-white text-2xl font-bold text-center"
                                    href="https://wickette.github.io/V_A_S_T/" target="blank">
                                    <span class="absolute inset-0"></span>
                                    Muscles and Meals <br />(team project)
                                </a>
                            </h3>
                        </div>
                    </article>
                    <a class="text-yellow-100 mx-36" href="https://github.com/Wickette/V_A_S_T.git"
                        target="blank">GitHub Code</a>
                </div>
                <div>
                    <article class="relative h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out mb-4" >
                        <div class="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                        <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                            <h3 class="text-center">
                                <a class="text-white text-2xl font-bold text-center" href="#" target="">
                                    <span class="absolute inset-0"></span>
                                    ~ Coming Soon ~
                                </a>
                            </h3>
                        </div>
                    </article>
                    <a class="text-yellow-100 mx-36" href="#" target="">GitHub Code</a>
                </div>
                <div>
                    <article class="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out mb-4" >
                        <div class="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                        <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                            <h3 class="text-center">
                                <a class="text-white text-2xl font-bold text-center" href="#" target="">
                                    <span class="absolute inset-0"></span>
                                    ~ Coming Soon ~
                                </a>
                            </h3>
                        </div>
                    </article>
                    <a class="text-yellow-100 mx-36" href="#" target="">GitHub Code</a>
                </div>
                <div>
                    <article class="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out mb-4" >
                        <div class="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                        <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                            <h3 class="text-center">
                                <a class="text-white text-2xl font-bold text-center" href="#" target="">
                                    <span class="absolute inset-0"></span>
                                    ~ Coming Soon ~
                                </a>
                            </h3>
                        </div>
                    </article>
                    <a class="text-yellow-100 mx-36" href="#" target="">GitHub Code</a>
                </div>
            </section>
        </article>
    </section>
        </div>
    )
}

export default Portfolio
