import React, { useState } from "react";
import Navbar from "./Navbar";
import Resume from "./Resume";

const TemplateData = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    wantedJobTitle: "",
    summary: "",
    skills: "",
  });

  const [employment, setEmployment] = useState({
    jobTitles: {},
    emp: {},
    jobDesc: {},
    jobStartDate: {},
    jobEndDate: {},
  });

  const [education, setEducation] = useState({
    qual: {},
    edu: {},
    eduDesc: {},
    eduStartDate: {},
    eduEndDate: {},
  });

  const [project, setProject] = useState({
    projectTitles: {},
    projectDesc: {},
    projectStartDate: {},
    projectEndDate: {},
  });

  const [type, setType] = useState("two-column");
  const [headerColor, setHeaderColor] = useState("#2933c2");
  const [headerTextColor, setHeaderTextColor] = useState("#ffffff");

  const [empTemplate, setEmpTemplate] = useState([]);
  const [eduTemplate, setEduTemplate] = useState([]);
  const [projectTemplate, setProjectTemplate] = useState([]);

  const [empCount, setEmpCount] = useState(0);
  const [eduCount, setEduCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);

  const handleEmpClick = (e) => {
    e.preventDefault();
    let i = empCount;
    ++i;
    const template = (
      <div className="w-4/5 p-2 m-2" key={`empKey${i}`}>
        <div className="w-full flex-col justify-center items-center">
          <label className="p-2" htmlFor={`jobStartDate${i}`}>
            Start
          </label>
          <input
            className="w-full pl-0.5 m-2 rounded"
            type="month"
            id={`jobStartDate${i}`}
            name={`jobStartDate${i}`}
            onChange={handleChange}
          />
          <label className="p-2" htmlFor={`jobEndDate${i}`}>
            End
          </label>
          <input
            className="w-full pl-0.5 m-2 rounded"
            type="month"
            id={`jobEndDate${i}`}
            name={`jobEndDate${i}`}
            onChange={handleChange}
          />
        </div>
        <input
          className="w-full p-2 m-2 rounded"
          type="text"
          id={`jobTitle${i}`}
          name={`jobTitle${i}`}
          placeholder="Job Title"
          onChange={handleChange}
        />
        <input
          className="w-full p-2 m-2 rounded"
          type="text"
          id={`emp${i}`}
          name={`emp${i}`}
          placeholder="Employer"
          onChange={handleChange}
        />
        <textarea
          className="w-full p-2 m-2 rounded"
          name={`jobDesc${i}`}
          placeholder="Description"
          rows="5"
          cols="15"
          onChange={handleChange}
        />
      </div>
    );

    const empArray = [...empTemplate];
    empArray.push(template);
    setEmpTemplate(empArray);
    setEmpCount(i);
  };

  const handleProjectClick = (e) => {
    e.preventDefault();
    let i = projectCount;
    ++i;

    const template = (
      <div className="w-4/5 p-2 m-2" key={`projKey${i}`}>
        <div className="w-full flex-col justify-center items-center">
          <label className="p-2" htmlFor={`projectStartDate${i}`}>
            Start
          </label>
          <input
            className="w-full pl-0.5 m-2 rounded"
            type="month"
            id={`projectStartDate${i}`}
            name={`projectStartDate${i}`}
            onChange={handleChange}
          />
          <label className="p-2" htmlFor={`projectEndDate${i}`}>
            End
          </label>
          <input
            className="w-full pl-0.5 m-2 rounded"
            type="month"
            id={`projectEndDate${i}`}
            name={`projectEndDate${i}`}
            onChange={handleChange}
          />
        </div>
        <input
          className="w-full p-2 m-2 rounded"
          type="text"
          id={`projectTitle${i}`}
          name={`projectTitle${i}`}
          placeholder="Project Title"
          onChange={handleChange}
        />
        <textarea
          className="w-full p-2 m-2 rounded"
          name={`projectDesc${i}`}
          placeholder="Description"
          rows="5"
          cols="15"
          onChange={handleChange}
        />
      </div>
    );

    const projectArray = [...projectTemplate];
    projectArray.push(template);
    setProjectTemplate(projectArray);
    setProjectCount(i);
  };

  const handleEduClick = (e) => {
    e.preventDefault();
    let i = eduCount;
    ++i;

    const template = (
      <div className="w-4/5 p-2 m-2" key={`eduKey${i}`}>
        <div className="w-full flex-col justify-center items-center">
          <label className="p-2" htmlFor={`eduStartDate${i}`}>
            Start
          </label>
          <input
            className="w-full pl-0.5 m-2 rounded"
            type="month"
            id={`eduStartDate${i}`}
            name={`eduStartDate${i}`}
            onChange={handleChange}
          />
          <label className="p-2" htmlFor={`eduEndDate${i}`}>
            End
          </label>
          <input
            className="w-full pl-0.5 m-2 rounded"
            type="month"
            id={`eduEndDate${i}`}
            name={`eduEndDate${i}`}
            onChange={handleChange}
          />
        </div>
        <input
          className="w-full p-2 m-2 rounded"
          type="text"
          id={`qual${i}`}
          name={`qual${i}`}
          placeholder="Qualification"
          onChange={handleChange}
        />
        <input
          className="w-full p-2 m-2 rounded"
          type="text"
          id={`educ${i}`}
          name={`educ${i}`}
          placeholder="School/College"
          onChange={handleChange}
        />
        <textarea
          className="w-full p-2 m-2 rounded"
          name={`eduDesc${i}`}
          placeholder="Description"
          rows="5"
          cols="15"
          onChange={handleChange}
        />
      </div>
    );

    const eduArray = [...eduTemplate];
    eduArray.push(template);
    setEduTemplate(eduArray);
    setEduCount(i);
  };

  const handleChange = (e) => {

    const userData = { ...data };
    const empData = { ...employment };
    const eduData = { ...education };
    const projectData = { ...project };

    if (e.target.name === "templates") {

      setType(e.target.value);
      e.target.value === "minimalist"
        ? setHeaderColor("#F3F4F6")
        : setHeaderColor("#7F1D1D");
      e.target.value === "minimalist"
        ? setHeaderTextColor("#1F2937")
        : setHeaderTextColor("#ffffff");

    } else if (e.target.name === "headerColor") {
      setHeaderColor(e.target.value);

    } else if (e.target.name === "headerTextColor") {
      setHeaderTextColor(e.target.value);

    } else if (e.target.name.includes("jobTitle")) {
      empData.jobTitles[`${e.target.name}`] = e.target.value;
    } else if (e.target.name.includes("emp")) 
    {
      empData.emp[`${e.target.name}`] = e.target.value;
    } else if (e.target.name.includes("jobDesc")) 
    {
      empData.jobDesc[`${e.target.name}`] = e.target.value;
    } else if (e.target.name.includes("jobStartDate"))
    {
      empData.jobStartDate[`${e.target.name}`] = e.target.value;
    } else if (e.target.name.includes("jobEndDate")) 
    {
      empData.jobEndDate[`${e.target.name}`] = e.target.value;
    } else if (e.target.name.includes("qual")) 
    {
      eduData.qual[`${e.target.name}`] = e.target.value;
    } else if (e.target.name.includes("educ")) 
    {
      eduData.edu[`${e.target.name}`] = e.target.value;
    } else if (e.target.name.includes("eduDesc")) 
    {
      eduData.eduDesc[`${e.target.name}`] = e.target.value;
    } else if (e.target.name.includes("eduStartDate")) {
      eduData.eduStartDate[`${e.target.name}`] = e.target.value;
    } else if (e.target.name.includes("eduEndDate")) 
    {
      eduData.eduEndDate[`${e.target.name}`] = e.target.value;
    } else if (e.target.name.includes("projectTitle")) 
    {
      projectData.projectTitles[`${e.target.name}`] = e.target.value;
    } else if (e.target.name.includes("projectDesc")) 
    {
      projectData.projectDesc[`${e.target.name}`] = e.target.value;
    } else if (e.target.name.includes("projectStartDate")) 
    {
      projectData.projectStartDate[`${e.target.name}`] = e.target.value;
    } else if (e.target.name.includes("projectEndDate")) 
    {
      projectData.projectEndDate[`${e.target.name}`] = e.target.value;
    } else {
      userData[`${e.target.name}`] = e.target.value;
    }

    setData(userData);
    setEmployment(empData);
    setEducation(eduData);
    setProject(projectData);
  };

  return (
    <div className="w-screen h-full bg-gray-light text-gray-dark font-sans">
      <Navbar showDownloadBtn={true} />
      <div className="flex p-3 print:p-0">
        <form className="w-2/5 flex flex-col justify-evenly print:hidden">
          <h3 className="w-4/5 m-2 text-xl">Template Type</h3>
          <select
            className="w-4/5 p-2 m-2 rounded"
            name="templates"
            id="templates"
            onChange={handleChange}
            value={type}
          >
            <option value="two-column">Two-Column</option>
            <option value="minimalist">Minimalist</option>
          </select>
          <div className="w-4/5">
            <label className="m-2 text-xl block" htmlFor="header">
              Header Color
            </label>
            <input
              className="mx-2 border-2 border-white rounded"
              type="color"
              id="headerColor"
              name="headerColor"
              onChange={handleChange}
              value={headerColor}
            />
          </div>
          <div className="w-4/5">
            <label className="m-2 text-xl block" htmlFor="header">
              Header-Text Color
            </label>
            <input
              className="mx-2 border-2 border-white rounded"
              type="color"
              id="headerTextColor"
              name="headerTextColor"
              onChange={handleChange}
              value={headerTextColor}
            />
          </div>
          <h3 className="w-4/5 m-2 text-xl">Personal Details</h3>
          <input
            className="w-4/5 p-2 m-2 rounded"
            type="text"
            id="name"
            name="name"
            value={data.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <input
            className="w-4/5 p-2 m-2 rounded"
            type="email"
            id="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="E-mail ID"
          />
          <input
            className="w-4/5 p-2 m-2 rounded"
            type="tel"
            id="phone"
            name="phone"
            value={data.phone}
            onChange={handleChange}
            placeholder="Phone"
          />
          <input
            className="w-4/5 p-2 m-2 rounded"
            type="text"
            id="location"
            name="location"
            value={data.location}
            onChange={handleChange}
            placeholder="City, Country"
          />
          <h3 className="w-4/5 m-2 text-xl">Professional Details</h3>
          <input
            className="w-4/5 p-2 m-2 rounded"
            type="text"
            id="wantedJobTitle"
            name="wantedJobTitle"
            value={data.wantedJobTitle}
            onChange={handleChange}
            placeholder="Job Title"
          />
          <textarea
            className="w-4/5 p-2 m-2 rounded"
            name="summary"
            placeholder="Professional Summary"
            rows="5"
            cols="15"
            value={data.summary}
            onChange={handleChange}
          />
          <input
            className="w-4/5 p-2 m-2 rounded"
            type="text"
            id="skills"
            name="skills"
            value={data.skills}
            onChange={handleChange}
            placeholder="Skills"
          />
          <button
            className="w-4/5 rounded bg-blue text-white m-2 p-2 text-center"
            onClick={handleEmpClick}
          >
            Add Employment
          </button>
          {empTemplate.map((el) => el)}
          <button
            className="w-4/5 rounded bg-blue text-white m-2 p-2 text-center"
            onClick={handleProjectClick}
          >
            Add Project
          </button>
          {projectTemplate.map((el) => el)}
          <h3 className="w-4/5 m-2 text-xl">Educational Background</h3>
          <button
            className="w-4/5 rounded bg-blue text-white m-2 p-2 text-center"
            onClick={handleEduClick}
          >
            Add Education
          </button>
          {eduTemplate.map((el) => el)}
        </form>
        <Resume
          userData={data}
          empData={employment}
          empCount={empCount}
          eduData={education}
          eduCount={eduCount}
          projectData={project}
          projectCount={projectCount}
          type={type}
          headerColor={headerColor}
          headerTextColor={headerTextColor}
        />
      </div>
    </div>
  );
};

export default TemplateData;