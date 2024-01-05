import React from "react";
import Minimalist from "./Templates/Minimalist";
import TwoColumn from "./Templates/TwoColumn";

const Resume = ({
  type,
  userData,
  empData,
  empCount,
  eduData,
  eduCount,
  projectData,
  projectCount,
  headerColor,
  headerTextColor,
}) => {
  return (
    <>
      {type === "minimalist" ? (
        <Minimalist
          user={userData}
          employment={empData}
          empCount={empCount}
          education={eduData}
          eduCount={eduCount}
          project={projectData}
          projectCount={projectCount}
          headerColor={headerColor}
          headerTextColor={headerTextColor}
        />
      ) : (
        <TwoColumn
          user={userData}
          employment={empData}
          empCount={empCount}
          education={eduData}
          eduCount={eduCount}
          project={projectData}
          projectCount={projectCount}
          headerColor={headerColor}
          headerTextColor={headerTextColor}
        />
      )}
    </>
  );
};

export default Resume;
