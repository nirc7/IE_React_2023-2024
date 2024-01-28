import React, { Component } from 'react'

export default class CCPersonsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: [
        { id: 1, name: 'avi' },
        { id: 2, name: 'benny' }
      ]
    };
  }


  chgID = (e) => {
    this.setState({ id: e.target.value });
  }


  btnAddPerson = () => {

    let newPersons = this.state != null ? [...this.state.persons,
    { id: this.state.id, name: this.state.name }] : [];

    console.log(newPersons);
    this.setState({ persons: newPersons });
    console.log('addp', this.state.persons);
  }

  render() {

    let personsListStr = this.state.persons.map(per =>
      <a href="#" className="list-group-item" key={per.id}>{per.id + " hello " + per.name + "!"}</a>
    );

    return (
      <div>CCPersonsList <br />
        ID: <input type="text" onChange={this.chgID} /> <br />
        NAME: <input type="text" onChange={(e) => this.setState({ name: e.target.value })} />
        <button onClick={this.btnAddPerson}>Add Person</button> <br />

        <p style={{ fontWeight: "bold", margin: 10 }}>names list:</p>
        <div className="list-group" style={{ width: "80%" }}>{personsListStr}</div>
        <br /><br />
      </div>
    )
  }
}
