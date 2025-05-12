import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get('/api/statistics');
        setStats(res.data);
      } catch (err) {
        console.error('Error fetching statistics:', err);
      }
    };

    fetchStats();
  }, []);

  if (!stats) return <p>Loading dashboard...</p>;

  return (
    <div>
      <h2>Dashboard Statistics</h2>
      <ul>
        <li><strong>Total Applications:</strong> {stats.totalApplications}</li>
        <li><strong>Average Loan Amount:</strong> ₹{stats.averageLoanAmount.toFixed(2)}</li>
        <li><strong>Approved Applications:</strong> {stats.approvedApplications}</li>
        <li><strong>Success Rate:</strong> {stats.successRate.toFixed(2)}%</li>
      </ul>
    </div>
  );
};

export default Dashboard;
