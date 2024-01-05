import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/components/Home';
import TemplateData from '../src/components/TemplateData';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/templates" element={<TemplateData />} />
    </Routes>
  );
}

export default App;
