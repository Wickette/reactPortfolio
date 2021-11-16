import React from "react";
import "./home.scss";
import wallpaper from "./wallpaper.png"
import resume from "./Steph_Resume_FullStack.pdf"

const Home = () => {
  return (
    <div className="home">
      <div class="w-full absolute">
        <div class="w-full h-screen bg-black absolute bg-gradient-to-b from-black via-black to-yellow-400 opacity-50"></div>
        <div class="flex flex-col absolute w-full h-screen justify-center items-center z-30">
          <div class="text-8xl font-bold text-yellow-100">Stephanie Clark</div>
          <div class="text-2xl text-yellow-100 mt-32">Full-Stack Developer</div>
          <a href={resume} target="blank" class="bg-green-100 opacity-70 text-yellow-100 hover:bg-yellow-100 font-bold uppercase text-base mt-24 px-8 py-3 rounded shadow-md hover:shadow-lg hover:text-black outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"> Resume </a>
        </div>
        <img class="w-full h-screen" src={wallpaper} alt="anime-aesthetic-desk"/>
      </div>
    </div>
  );
};

export default Home;
