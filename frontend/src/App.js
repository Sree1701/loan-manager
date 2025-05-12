import React from 'react';
import ApplicationForm from './components/ApplicationForm';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Loan Manager</h1>
      <ApplicationForm />
      <hr />
      <Dashboard />
    </div>
  );
}

export default App;
