import React from 'react'

export default function FCImnputs(props) {

  let myId = 0;
  let myName = 'no name';

  const btnAddPerson = () => {
    let person = { id: myId, name: myName };
    props.sendPerson(person);
  }
  return (
    <div>
      ID: <input type="text" onChange={(e) => myId = e.target.value} /> <br />
      NAME: <input type="text" onChange={(e) => myName = e.target.value} />
      <button onClick={btnAddPerson}>Add Person</button> <br />
    </div>
  )
}
