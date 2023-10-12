import React, { useState } from "react";
import Loading from "../Loading";

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
                <div className="nestedContainer">
                    <div>
                        <label htmlFor="currentPosition">Current Position</label>
                        <input
                            type="text"
                            name="currentPosition"
                            className="currentInput"
                            value={currentPosition}
                            onChange={(e) => setCurrentPosition(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="currentLength">
                            For how long? (years from)
                        </label>
                        <input
                            type="text"
                            name="currentLength"
                            className="currentInput"
                            value={currentLength}
                            onChange={(e) => setCurrentLength(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="currentTechnologies">
                            Technologies used
                        </label>
                        <input
                            type="text"
                            name="currentTechnologies"
                            className="currentInput"
                            value={currentTechnologies}
                            onChange={(e) => setCurrentTechnologies(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <label htmlFor="photo">
                    Upload your profile image
                </label>
                <input
                    type="file"
                    name="photo"
                    id="photo"
                    accept="image/x-png,image/x-jpeg,image/jpg"
                    onChange={(e) => setHeadshot(e.target.files[0])}
                    required
                />

                <button>CREATE RESUME</button>
            </form>
        </div>
    );
};

export default Home;