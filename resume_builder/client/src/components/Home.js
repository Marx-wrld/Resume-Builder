import React, { useState } from 'react';
import Loading  from "./Loading";

const Home = () => {

    const [fullName, setFullName] = useState("");
    const [currentPosition, setCurrentPosition] = useState("");
    const [currentLength, setCurrentLength] = useState(1);
    const [currentTechnologies, setCurrentTechnologies] = useState("");
    const [headShot, setHeadShot] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            fullName,
            currentPosition,
            currentLength,
            currentTechnologies,
            headShot
        });
        setLoading(true);
    };
    //renders the loading component you submit the form
     if (loading) {
        return <Loading />;
    }
    return (
        <div className='app'>
            <h1>Resume Builder</h1>
            <p>Generate a resume with ChatGPT</p>
            <form
                onSubmit={handleSubmit}
                method="POST"
                encType='multipart/form-data'
            >
                <label htmlFor="fullName">
                    Enter your full name
                </label>
                <input
                    type="text"
                    required
                    name="fullName"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
                <div className="nestedContainer">
                    <div>
                        <label htmlFor="currentPosition">
                            Current Position
                        </label>
                        <input
                            type="text"
                            required
                            name="currentPosition"
                            className="currentInput"
                            value={currentPosition}
                            onChange={(e) => setCurrentPosition(e.target.value)}
                        />
                    </div>
                </div>
                <div className="nestedContainer">
                    <div>
                        <label htmlFor="currentLength">
                            For How Long? (years)
                        </label>
                        <input
                            type="number"
                            required
                            name="currentLength"
                            className="currentInput"
                            value={currentLength}
                            onChange={(e) => setCurrentLength(e.target.value)}
                        />
                    </div>
                </div>
                <div className="nestedContainer">
                    <div>
                        <label htmlFor="currentTechnologies">
                            Technologies used
                        </label>
                        <input
                            type="text"
                            required
                            name="currentTechnologies"
                            className="currentInput"
                            value={currentTechnologies}
                            onChange={(e) => setCurrentTechnologies(e.target.value)}
                        />
                    </div>
                </div>
                <label htmlFor="photo">
                    Upload your profile image
                </label>
                <input
                    type="file"
                    name='photo'
                    required
                    id="photo"
                    accept='image/x-png, image-jpeg'
                    onChange={(e) => setHeadShot(e.target.files[0])}
                />

                <button>CREATE RESUME</button>
            </form>

        </div>
    );
};

export default Home;
