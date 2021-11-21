import React from "react";
import "./home.scss";
import resume from "../../../assets/Steph_Resume_FullStack.pdf";

const Home = () => {
  return (
    <div className="home show_bg">
      <div className="container">
        <div class="nine">
          <h1>
            Stephanie Clark<span>Full Stack Developer</span>
          </h1>
        </div>

        <div className="btnWrapper">
          <div className="btn">
            <span>Resume</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
