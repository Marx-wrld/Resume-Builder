import React, { useState } from "react";
import Loading from "./Loading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = ({ setResult }) => {
    const [loading, setLoading] = useState(false);
    const [fullName, setFullName] = useState("");
    const [currentPosition, setCurrentPosition] = useState("");
    const [currentLength, setCurrentLength] = useState(1);
    const [currentTechnologies, setCurrentTechnologies] = useState("");
    const [headshot, setHeadshot] = useState(null);
    const [companyInfo, setCompanyInfo] = useState([{
        name: "",
        position: ""
    }])
    const navigate = useNavigate();

    //Updates the companyInfo state with the user's input
    const handleAddCompany = () => setCompanyInfo([...companyInfo, { name: "", position: ""}]);
    
    //removes a selected item from the list
    const handleRemoveCompany = (index) => {
        const list = [...companyInfo];
        list.splice(index, 1);
        setCompanyInfo(list);
    }

    //updates an item within the list (name and position)
    const handleUpdateCompany = (e, index) => {
        const { name, value } = e.target;
        const list = [...companyInfo];
        list[index][name] = value;
        setCompanyInfo(list);
    }


    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append("headshotImage", headshot, headshot.name);
        formData.append("fullName", fullName);
        formData.append("currentPosition", currentPosition);
        formData.append("currentLength", currentLength);
        formData.append("currentTechnologies", currentTechnologies);
        formData.append("workExperience", JSON.stringify(companyInfo));

        //This code creates a key & value pair representing the data sent via  axios to the API endpoint on the server
        axios 
            .post("http://localhost:4000/resume/create", formData, {})
            .then((res) => {
                if (res.data.message){
                    setResult(res.data.data);
                    navigate("/resume");
                }
            })
            .catch((err) => console.log(err));
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
                            type="number"
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


                {/* This code maps through the elements within the companyInfo array and displayes them on the webpage. */}
                <h3>Work Experience</h3>

                    {companyInfo.map((company, index) => (
                        <div className="nestedContainer" key={index}>
                            <div className="companies">
                                <label htmlFor="name">Company Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    onChange={(e) => handleUpdateCompany(e, index)}
                                    required
                                />
                            </div>
                            <div className="companies">
                                <label htmlFor="position">Position</label>
                                <input
                                    type="text"
                                    name="position"
                                    onChange={(e) => handleUpdateCompany(e, index)} //runs when a user updates the input field
                                    required
                                />
                            </div>
                            
                            <div className="btn__group">
                                {companyInfo.length - 1 === index && companyInfo.length < 5 && (
                                    <button
                                        id="addBtn"
                                        type="button"
                                        onClick={handleAddCompany} //Adds a new input to the field
                                    >
                                        Add
                                    </button>
                                )}
                                {companyInfo.length > 1 && (
                                    <button
                                        id="deleteBtn"
                                        type="button"
                                        onClick={() => handleRemoveCompany(index)} //Removes an item from the list
                                    >
                                        Remove
                                    </button>
                                )}
                        </div>
                        </div>
                    ))}
                <button>CREATE RESUME</button>
                
                </form>
        </div>
    );
};

export default Home;