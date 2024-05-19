// frontendV2/src/pages/StudentInfo.jsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function StudentInfo() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    // Fetch student data from backend API when component mounts
    axios.get(`http://localhost:3001/students/${id}`)
      .then(response => {
        setStudent(response.data.data.student);
      })
      .catch(error => {
        console.error(`Error fetching student with ID ${id}:`, error);
      });
  }, [id]);

  if (!student) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Student Info</h1>
      <p><strong>ID:</strong> {student.id}</p>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Gender:</strong> {student.gender}</p>
      <p><strong>School:</strong> {student.school}</p>
    </div>
  );
}

export default StudentInfo;
