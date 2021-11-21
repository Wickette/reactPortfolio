import React from "react";
import "./portfolio.scss";
import { projects } from "../../../data";

const Portfolio = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <hr className="mb-6 p-1 bg-green-100" />
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {projects.map((project) => (
            <>
              <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <article className="show_card relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out mb-4">
                  <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                  <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                    <h3 className="text-center">
                      <a
                        className="text-white text-2xl font-bold text-center"
                        href={project.link}
                        target="blank"
                      >
                        <span className="absolute inset-0"></span>
                        {project.title}
                      </a>
                    </h3>
                  </div>
                </article>
                <p className="text-yellow-100">
                  {project.description}
                </p>
                <a
                  href={project.github}
                  target="blank"
                  className="opacity-70 text-yellow-100 hover:bg-yellow-100 font-bold uppercase text-base  px-8 py-3 rounded shadow-md hover:shadow-lg hover:text-black outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  GitHub Code
                </a>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
