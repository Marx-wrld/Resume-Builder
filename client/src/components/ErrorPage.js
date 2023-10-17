import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className='app'>
            <h3>404 Error: Page Not Found
            <Link to='/'>Go Back Home</Link>
            </h3>
        </div>
    );
}

export default ErrorPage;