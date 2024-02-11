import { useState } from 'react';
import FCInputs from '../FuncComps/FCInputs'
import FCSL from '../FuncComps/FCSL';


const studentsInit = [
  { id: 1, name: 'avi', grade: 100 },
  { id: 2, name: 'benny', grade: 99 }
];

export default function Main() {
  const [students, setStudents] = useState(studentsInit);
  const [counter, setCounter] = useState(studentsInit.length)

  const getStudentFromChild = (studnet) => {
    console.log(studnet);
    let newCounter = counter + 1;
    studnet.id = newCounter;
    let newStudents = [...students, studnet];

    console.log(newStudents);

    setStudents(newStudents);
    setCounter(newCounter);
  }


  return (
    <div>
      <FCInputs send2Parent={getStudentFromChild} /> <br />
      <FCSL students={students} />
    </div>
  )
}
