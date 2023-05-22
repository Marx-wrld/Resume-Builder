import React from 'react';
import { Link } from "react-router-dom";


//This errorPage file displays the component below when users navigate directly to the resume page
const ErrorPage = () => {
  return (
    <div className='app'>
      <h3>
        You've not provided your details. Kindly head back to the {" "}
        <Link to="/">Homepage</Link>
      </h3>
    </div>
  );
};

export default ErrorPage;
