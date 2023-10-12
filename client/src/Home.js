import React, { useState, useEffect } from "react";
import Loading from "./Loading";

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [fullName, setFullName] = useState("");
    const [currentPosition, setCurrentPosition] = useState("");
    const [currentLength, setCurrentLength] = useState(1);
    const [currentTechnologies, setCurrentTechnologies] = useState("");
    const [headshot, setHeadshot] = useState(null);


    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log({
            fullName,
            currentPosition,
            currentLength,
            currentTechnologies,
            headshot,
        });
        setLoading(true);
    };

    if (loading) {
        return <Loading />;
    }
    return (
        <div className='app'>
            <h1>Resume Builder</h1>
            <p>Generate a resume with OpenAI in a few seconds</p>
            <form 
                onSubmit={handleFormSubmit} 
                method='POST'
                encType='multipart/form-data'
            >
                <label htmlFor="fullName">Enter your full name</label>
                <input 
                    type="text"
                    name="fullName"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                />
            </form>
        </div>
    )
}