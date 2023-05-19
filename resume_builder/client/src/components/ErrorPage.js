import React from 'react';
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className='app'>
      <h1>
        You've not provided your details. Kindly head back to the {" "}
        <Link to="/">Homepage</Link>
      </h1>
    </div>
  );
};

export default ErrorPage;
