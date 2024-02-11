import React, { Component } from 'react'
import FCInputs from '../FuncComps/FCInputs'
import FCSL from '../FuncComps/FCSL';

const studentsInit = [
  { id: 1, name: 'avi', grade: 100 },
  { id: 2, name: 'benny', grade: 99 }
];

export default class CCMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: studentsInit,
      counter: studentsInit.length
    };
  }

  getStudentFromChild = (studnet) => {
    console.log(studnet);
    let newCounter = this.state.counter + 1;
    studnet.id = newCounter;
    let newStudents = [...this.state.students, studnet];

    console.log(newStudents);

    this.setState({
      students: newStudents,
      counter: newCounter
    });
  }

  render() {
    return (
      <div>
        <FCInputs send2Parent={this.getStudentFromChild} /> <br />
        <FCSL students={this.state.students} />
      </div>
    )
  }
}
