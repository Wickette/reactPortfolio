import React from 'react'
import "./intro.scss"
import profilepic from "./stephanie.jpg"
import Rin from "./Rin.jpg"
import Kai from "./Kai.jpg"
import Jynx from "./Jynx.jpg"

const Intro = () => {
    return (
        <div className="intro">
           <div className="max-w-4xl mt-12 flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
	<div id="profile" className="w-full lg:w-3/5 border-4 border-yellow-100 rounded-lg lg:rounded-l lg:rounded-r shadow-2xl bg-yellow-100 opacity-60 mx-6 lg:mx-0 mt-12">
		<div className="p-4 md:p-12 text-center lg:text-left">
			<div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"></div>
			<h1 className="text-3xl font-bold pt-8 lg:pt-0">Stephanie Clark</h1>
			<div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
			<p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start"><svg className="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"/></svg> Full-Stack Developer</p>
			<p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start"><svg className="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z"/></svg> Ontario, Canada</p>
			<div className="pt-8 text-sm">    
                Hello!
                My name is Stephanie Clark<br></br>
                I'm a full-stack developer graduated from the Toronto University full-stack Coding Bootcamp.<br></br>
                More info to come soon, as well as updates to this website as more knowledge is acquired<br></br>
                <div className="flex flex-col items-center vh-100">
                    <h4 className="text-center font-bold text-2xl mt-10">Meet my Family</h4>
                    <div className="flex flex-col">
                    <figure className="p-6 flex flex-col items-center">
                        <img src={Kai} alt="a pic of my cat Kai" className="h-44 w-44 rounded-full" />
                        <figcaption className="text-center">The mamas boi - Kai</figcaption>
                    </figure>
                    <figure className="p-6 flex flex-col items-center">
                        <img src={Jynx} alt="a pic of my cat Jynx" className="h-44 w-44 rounded-full" />
                        <figcaption className="text-center">The eldest girl/aloof floof - Jynx</figcaption>
                    </figure>
                    <figure className="p-6 flex flex-col items-center">
                        <img src={Rin} alt="a pic of my cat Rin" className="h-44 w-44 rounded-full" />
                        <figcaption className="text-center">The youngest girl/trouble maker - Rin</figcaption>
                    </figure>
                    </div>
                </div>
            </div>


		</div>
	</div>	

	<div className="w-full lg:w-2/5">
		<img src={profilepic} className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"/>			
	</div>		
</div>
    </div>
    )
}

export default Intro
