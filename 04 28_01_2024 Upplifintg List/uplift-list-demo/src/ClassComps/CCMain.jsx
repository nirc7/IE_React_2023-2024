import React, { Component } from 'react'
import FCImnputs from '../FuncComps/FCImnputs'
import FCPL from '../FuncComps/FCPL'

export default class CCMain extends Component {
  constructor(props) {
    super(props);

    this.state = { persons: [] };
  }

  getPerson = (person) => {
    let newPersons = [...this.state.persons, person];

    console.log(newPersons);
    this.setState({ persons: newPersons });
    console.log('addp', this.state.persons);
  }

  render() {
    return (
      <div>CCMain
        <FCImnputs sendPerson={this.getPerson} /> <br />
        <FCPL persons={this.state.persons} />
      </div>
    )
  }
}
