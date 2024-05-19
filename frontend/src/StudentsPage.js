import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StudentsPage() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch student data from backend API when component mounts
    axios.get('http://localhost:3001/api/students')
      .then(response => {
        setStudents(response.data.data.students);
      })
      .catch(error => {
        console.error('Error fetching students:', error);
      });
  }, []);

  return (
    <div>
      <h1>Students List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>School</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.gender}</td>
              <td>{student.school}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentsPage;
