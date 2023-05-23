import React, { useState } from 'react';
import Loading  from "./Loading";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Home = ({setResult}) => {

    const [fullName, setFullName] = useState("");
    const [currentPosition, setCurrentPosition] = useState("");
    const [currentLength, setCurrentLength] = useState(1);
    const [currentTechnologies, setCurrentTechnologies] = useState("");
    const [profileImg, setProfileImg] = useState(null);
    //Array that holds the users' previous work experience, so we add a new state to hold the array of job descriptions
    const [companyInfo, setCompanyInfo] = useState([{name: "", position: ""}]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

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

    const handleSubmit = (e) => {
        e.preventDefault();

        //The functions below help with updating the state
        const formData = new FormData();
        formData.append("profileImage", profileImg, profileImg.name);
        formData.append("fullName", fullName);
        formData.append("currentPosition", currentPosition);
        formData.append("currentLength", currentLength);
        formData.append("currentTechnologies", currentTechnologies);
        formData.append("workHistory", JSON.stringify(companyInfo));

        axios.post("http://localhost:4000/resume/create", formData, {}).then((res) => {
            if (res.data.message){
                //updates the result object
                setResult(res.data.data);
                navigate("/resume");
            }
        }).catch((err) => console.error(err));
        setLoading(true);
    };

    //renders the loading component you submit the form
     if (loading) {
        return <Loading />;
    }

    return (
        <div className='app'>
            <h1>Resume Builder</h1>
            <p>Generrgb(50, 149, 50)h ChatGPT</p>
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
                    Upload Your Profile Image
                </label>
                <input
                    type="file"
                    name='photo'
                    required
                    id="photo"
                    accept='image/x-png, image/jpeg'
                    onChange={(e) => setProfileImg(e.target.files[0])}
                />

                <h3> Companies You've Worked At</h3>
            {/* The code below maps through the elements within the companyInfo array and displays them on the webpage.*/}
            {/* The handleUpdateCompany function runs when a user updates the input field  */}
            {/* The handleRemoveCompany removes an item from the list of elements, and the handleAddCompany adds a new input field */}

                {companyInfo.map((company, index) => (
                    <div className='nestedContainer' key={index}>
                        <div className='companies'>
                            <label htmlFor="name">
                                Company name
                            </label>
                            &nbsp;
                            <input
                                type="text"
                                name='name'
                                required
                                onChange={(e) => handleUpdateCompany(e, index)} 
                            />
                        </div>
                        <div className='companies'>
                            <label htmlFor="position">
                                Position Held
                            </label>
                            &nbsp;
                            <input 
                                type="text"
                                name="position"
                                required
                                onChange={(e) => handleUpdateCompany(e, index)}
                            />
                        </div>

                        <div className="btn__group">
                            {companyInfo.length - 1 === index && companyInfo.length < 4 && (
                                <button id="addBtn" onClick={handleAddCompany}>
                                    Add
                                </button>
                            )}
                            {companyInfo.length > 1 && (
                                <button id="deleteBtn" onClick={() => handleRemoveCompany(index)}>
                                    Del
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
