

export default function FCStudent(props) {

  let gr = props.grade;
  if (80 < gr) {
    gr += 5;
  }


  function btnLearn() {
    gr += 2;
    console.log(gr);
  }

  function chgGender(event) {
    console.log(event.target.value);
  }

  return (
    <div style={{
      border: 'dashed blue 3px',
      margin: 20, padding: 15
    }}>
      id={props.id} <br />
      name= {props.name} <br />
      grade= {gr} <br />
      <button onClick={btnLearn}>Learn</button> <br />
      Gender: <input type="text" onChange={chgGender} />
    </div>
  );
}