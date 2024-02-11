import React from 'react';

import Button from '@mui/material/Button';
import PersonAdd from '@mui/icons-material/PersonAdd';
import TextField from '@mui/material/TextField';


export default function FCInputs(props) {

  let name;
  let grade;

  const btnAddStudnet = () => {
    let student = { name, grade };
    props.send2Parent(student);
  }

  return (
    <div>
      <TextField id="standard-basic" margin="normal" color="secondary"
        label="Name" variant="standard"
        onChange={(e) => name = e.target.value} /> <br />
      <TextField id="standard-basic" margin="normal" color="secondary"
        label="Garde" variant="standard"
        onChange={(e) => grade = e.target.value} /> <br /> <br />
      <Button variant="outlined"
        onClick={btnAddStudnet}
        color="secondary" endIcon={<PersonAdd />}>
        Add Student
      </Button>
    </div>
  )
}
