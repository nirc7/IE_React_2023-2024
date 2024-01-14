
export default function FCStudent(props) {

  let gr = props.grade;
  if (90 <= gr) {
    gr += 5;
  }

  function btnLearn() {
    gr += 2;
    console.log(gr);
  }

  let  age = 0;
  function chgAge(e) {
    //console.log(e.target.value);
    //go to DB insrewt into list 405
    age=e.target.value;
    console.log(age);
  }

  if (gr < 60) {
    return (
      <div>
        failed!
      </div>
    );
  }
  else {
    return (
      <div style={{
        border: 'solid 2px orange',
        borderRadius: 20,
        margin: 20,
        padding: 10
      }}>
        <h4>Student</h4>
        id={props.id} <br />
        name={props.name} <br />
        grade={gr} <br />
        <button
          onClick={btnLearn}
          className="btn btn-outline-success" >Learn</button> <br /> <br />
        Age: <input type="text" onChange={chgAge} />
      </div>
    );
  }
}