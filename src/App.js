import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from '../src/components/LandingPage';
import TemplateData from '../src/components/TemplateData';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/templates" element={<TemplateData />} />
    </Routes>
  );
}

export default App;
