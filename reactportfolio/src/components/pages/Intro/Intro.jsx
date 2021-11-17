import React from 'react'
import "./intro.scss"
import profilepic from "./stephanie.jpg"
import Rin from "./Rin.jpg"
import Kai from "./Kai.jpg"
import Jynx from "./Jynx.jpg"

const Intro = () => {
    return (
        <div className="intro">
            <section id="about" class="about">
                <div class="container aos-init aos-animate" data-aos="fade-up">
                    <div class="section-title">
                    <h2>About</h2>
                    <p>Hello ~  My name is <strong className="name-span">Stephanie Clark</strong></p>
                    </div>

                    <div class="row">
                    <div class="col-lg-4">
                        <img src={profilepic} class="img-fluid" alt=""/>
                    </div>
                    <div class="col-lg-8 pt-4 pt-lg-0 content">
                        <h3>Full Stack Web Developer</h3>
                        <p class="fst-italic">
                        I'm a full-stack developer graduated from the Toronto University full-stack Coding Bootcamp.
                        </p>
                        <div class="row">
                        <div class="col-lg-6">
                            <ul>
                            <li><i class="bi bi-rounded-right"></i> <strong>LinkedIn:</strong> www.example.com</li>
                            <li><i class="bi bi-rounded-right"></i> <strong>Phone:</strong> +123 456 7890</li>
                            <li><i class="bi bi-rounded-right"></i> <strong>City:</strong> Orillia, Ontario, Canada</li>
                            </ul>
                        </div>
                        <div class="col-lg-6">
                            <ul>
                            <li><i class="bi bi-rounded-right"></i> <strong>GitHub:</strong> www.example.com</li>
                            <li><i class="bi bi-rounded-right"></i> <strong>Email:</strong> sc.aurora92@gmail.com</li>
                            <li><i class="bi bi-rounded-right"></i> <strong>Freelance:</strong> Available</li>
                            </ul>
                        </div>
                        </div>
                        <div class="flex flex-col items-center">
                                <h4 class="text-center font-bold text-2xl mt-10">Meet my Family</h4>
                                <div class="flex flex-row">
                                <figure class="p-6 flex flex-col items-center">
                                    <img src={Kai} alt="a pic of my cat Kai" class="h-44 w-44 rounded-full" />
                                    <figcaption class="text-center">The mamas boi - Kai</figcaption>
                                </figure>
                                <figure class="p-6 flex flex-col items-center">
                                    <img src={Jynx} alt="a pic of my cat Jynx" class="h-44 w-44 rounded-full" />
                                    <figcaption class="text-center">The eldest girl/aloof floof - Jynx</figcaption>
                                </figure>
                                <figure class="p-6 flex flex-col items-center">
                                    <img src={Rin} alt="a pic of my cat Rin" class="h-44 w-44 rounded-full" />
                                    <figcaption class="text-center">The youngest girl/trouble maker - Rin</figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        </section>
    </div>
    )
}

export default Intro
