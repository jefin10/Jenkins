import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Use relative path so nginx proxy handles the request
    const apiUrl = '/student-details';
    
    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        setStudentData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Student Details</h1>
        {loading && <p>Loading...</p>}
        {error && <p className="error">Failed to load student details: {error}</p>}
        {studentData && (
          <div className="student-info">
            <p><strong>Name:</strong> {studentData.name}</p>
            <p><strong>Roll:</strong> {studentData.rollNumber}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
