import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className='app'>
            <h1>404 Error: Page Not Found</h1>
            <Link to='/'>Go Back Home</Link>
        </div>
    );
}

export default ErrorPage;