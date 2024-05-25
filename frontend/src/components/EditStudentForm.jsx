// src/components/EditStudentForm.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  TextField,
  Container,
  Typography,
  Paper,
  Grid
} from "@mui/material";
import axios from "axios";

function EditStudentForm() {
  const { id } = useParams();
  const [student, setStudent] = useState({
    name: '',
    gender: '',
    school: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:3001/students/${id}`)
      .then(response => {
        setStudent(response.data.data.student);
      })
      .catch(error => {
        console.error("Error fetching student:", error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent(prevStudent => ({
      ...prevStudent,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3001/students/${id}`, student)
      .then(() => {
        // Handle success, e.g., redirect or show a message
      })
      .catch(error => {
        console.error("Error updating student:", error);
      });
  };

  return (
    <Container component={Paper} sx={{ mt: 4, p: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>Edit Student</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="name"
              label="Name"
              fullWidth
              value={student.name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="gender"
              label="Gender"
              fullWidth
              value={student.gender}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="school"
              label="School"
              fullWidth
              value={student.school}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Update Student
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default EditStudentForm;
