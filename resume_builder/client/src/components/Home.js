import React, { useState } from 'react';
import Loading  from "./Loading";

const Home = () => {

    const [fullName, setFullName] = useState("");
    const [currentPosition, setCurrentPosition] = useState("");
    const [currentLength, setCurrentLength] = useState(1);
    const [currentTechnologies, setCurrentTechnologies] = useState("");
    const [profileImg, setProfileImg] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            fullName,
            currentPosition,
            currentLength,
            currentTechnologies,
            profileImg
        });
        setLoading(true);
    };
    //Array that holds the users' previous work experience, so we add a new state to hold the array of job descriptions
    const [companyInfo, setCompanyInfo] = useState([{name: "", position: ""}]);

    //The functions below help with updating the state

    //Updates the state with users' input
    const handleAddCompany = () =>
        setCompanyInfo([...companyInfo, { name: "", position: ""}]);

    //removes a selected item from the list
    const handleRemoveCompany = (index) => {
        const list = [...companyInfo];
        list.splice(index, 1);
        setCompanyInfo(list);
    };
    //Updates an item within the list
    const handleUpdateCompany = (e, index) => {
        const { name, value } = e.target;
        const list = [...companyInfo];
        list[index][name] = value;
        setCompanyInfo(list);
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
                    Enter Your Full Name
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
                    <div>
                        <label htmlFor="currentTechnologies">
                            Technologies Used
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
                    accept='image/x-png, image/jpeg'
                    onChange={(e) => setProfileImg(e.target.files[0])}
                />

                <button>CREATE RESUME</button>
            </form>

        </div>
    );
};

export default Home;
