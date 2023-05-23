import React, { useState } from 'react';
import {
  TextField,
  Typography,
  Button,
  Box,
  Paper,
  FormControlLabel,
  Switch,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

function DarkModeToggle({ darkMode, onToggle }) {
  return (
    <FormControlLabel
      control={
        <Switch
          checked={darkMode}
          onChange={onToggle}
          color="primary"
          name="darkModeToggle"
        />
      }
      label="Dark Mode"
    />
  );
}

function TeacherStudentComponent() {
  const [pairs, setPairs] = useState([]);
  const [teacherName, setTeacherName] = useState('');
  const [studentName, setStudentName] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const addPair = () => {
    if (teacherName && studentName) {
      const newPair = {
        teacher: teacherName,
        student: studentName,
      };
      setPairs([...pairs, newPair]);
      setTeacherName('');
      setStudentName('');
    }
  };

  const deletePair = (index) => {
    const updatedPairs = [...pairs];
    updatedPairs.splice(index, 1);
    setPairs(updatedPairs);
  };

  const handleDarkModeToggle = (event) => {
    setDarkMode(event.target.checked);
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: '0 auto',
        padding: 2,
        backgroundColor: darkMode ? '#333' : '#f5f5f5',
        borderRadius: 8,
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography
        variant="h5"
        align="center"
        gutterBottom
        sx={{ color: darkMode ? '#fff' : '#333' }}
      >
        Teacher and Student
      </Typography>
      <DarkModeToggle darkMode={darkMode} onToggle={handleDarkModeToggle} />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          id="teacherName"
          label="Teacher's Name"
          value={teacherName}
          onChange={(e) => setTeacherName(e.target.value)}
          fullWidth
          variant="outlined"
          color={darkMode ? 'primary' : 'secondary'}
        />
        <TextField
          id="studentName"
          label="Student's Name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          fullWidth
          variant="outlined"
          color={darkMode ? 'primary' : 'secondary'}
        />
        <Button
          variant="contained"
          onClick={addPair}
          startIcon={<AddIcon />}
          disableElevation
          color={darkMode ? 'primary' : 'secondary'}
        >
          Add Pair
        </Button>
      </Box>
      {pairs.map((pair, index) => (
        <Paper
          key={index}
          elevation={3}
          sx={{
            marginTop: 2,
            padding: 2,
            backgroundColor: darkMode ? '#222' : '#fff',
            borderRadius: 8,
          }}
        >
          <Typography
            variant="body1"
            fontWeight="bold"
            sx={{ color: darkMode ? '#fff' : '#333' }}
          >
            Teacher: {pair.teacher}
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginTop: 1, color: darkMode ? '#fff' : '#333' }}
          >
            Student: {pair.student}
          </Typography>
          <Button
            variant="outlined"
            size="small"
            startIcon={<DeleteIcon />}
            sx={{ marginTop: 1 }}
            onClick={() => deletePair(index)}
            color={darkMode ? 'primary' : 'secondary'}
          >
            Delete
          </Button>
        </Paper>
      ))}
    </Box>
  );
}

export default TeacherStudentComponent;
