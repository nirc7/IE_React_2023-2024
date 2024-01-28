import React from 'react'

export default function FCPL(props) {

  let personsListStr = props.persons.map(per =>
    <a href="#" className="list-group-item" key={per.id}>{per.id + " hello " + per.name + "!"}</a>
  );

  return (
    <div>FCPL
      <p style={{ fontWeight: "bold", margin: 10 }}>names list:</p>
      <div className="list-group" style={{ width: "80%" }}>{personsListStr}</div> 
      <br />
    </div>
  )
}
