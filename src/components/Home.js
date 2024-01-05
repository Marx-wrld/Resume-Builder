import React from "react";
import { useNavigate } from 'react-router-dom';
import Logo from "../assets/logo.svg";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    let url = "/templates";
    navigate(url);
  };

  return (
    <div className="flex flex-col lg:flex-row w-screen h-screen bg-gray-light font-sans">
      <img className="h-auto lg:h-full bg-blue p-0 m-0" src={Logo} alt="tech-resume-logo"></img>
      <div className="flex flex-col justify-center items-center h-full text-gray-dark mx-auto p-2 lg:p-10">
        <h1 className="text-5xl lg:text-7xl text-blue">Resume Builder</h1>
        <br />
        <h3 className="text-xl lg:text-2xl">
          Designing Success, One Resume at a Time
        </h3>
        <div className="flex justify-center">
          <button
            id="get-started"
            className="rounded bg-blue text-white text-lg hover:shadow-xl m-4 mt-8 px-4 py-2 text-center"
            onClick={handleClick}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
