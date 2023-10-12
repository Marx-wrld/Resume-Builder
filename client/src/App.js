import React from "react";
import { BrowseRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Resume from "./components/Resume";

const App = () => {
  return (
    <div>
      <BrowseRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowseRouter>
    </div>
  );
}

export default App;
