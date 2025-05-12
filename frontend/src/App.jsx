// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoanApplicationForm from './components/LoanApplicationForm';
import VerifierDashboard from './components/VerifierDashboard';
import AdminDashboard from './components/AdminDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoanApplicationForm />} />
        <Route path="/verifier" element={<VerifierDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
