// frontendV2/src/pages/StudentsPage.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const lightGray = '#f2f2f2';
const gray = '#cccccc';
const green = '#4caf50';
const white = '#ffffff';

function StudentsPage() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch student data from backend API when component mounts
    axios.get('http://localhost:3001/students')
      .then(response => {
        setStudents(response.data.data.students);
      })
      .catch(error => {
        console.error('Error fetching students:', error);
      });
  }, []);

  return (
    <div style={{ backgroundColor: lightGray, padding: '20px', margin: '0 auto', maxWidth: '800px', overflowY: 'auto' }}>
      <h1 style={{ textAlign: 'center' }}>Student List</h1>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Button variant="contained" color="primary" component={Link} to="/students/new">
          Add New Student
        </Button>
      </div>
      <Table style={{ border: `1px solid ${gray}` }}>
        <TableHead>
          <TableRow style={{ backgroundColor: green, color: white, fontWeight: 'bold' }}>
            <TableCell>Student Name</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>School</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map(student => (
            <TableRow key={student.id}>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.gender}</TableCell>
              <TableCell>{student.school}</TableCell>
              <TableCell>
                <Button variant="contained" component={Link} to={`/students/${student.id}`} style={{ marginRight: '8px' }}>
                  View
                </Button>
                <Button variant="contained" component={Link} to={`/students/edit/${student.id}`} style={{ marginRight: '8px' }}>
                  Edit
                </Button>
                <Button variant="contained" component={Link} to={`/students/delete/${student.id}`} color="error">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default StudentsPage;
