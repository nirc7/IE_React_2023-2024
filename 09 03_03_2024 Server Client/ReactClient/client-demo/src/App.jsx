import './App.css'

let loacl = false;
const apiUrl = 'https://localhost:7075/api/Students';
if(!local)
  apiUrl = 'hproj.ruppint:7075/api/Students';


function App() {


  const btnGet = () => {

    fetch(apiUrl, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8',
      })
    })
      .then(res => {
        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
        return res.json()
      })

      .then(
        (result) => {
          console.log("fetch btnFetchGetStudents= ", result);
          result.map(st => console.log(st.name));
          console.log('result[0].name=', result[0].name);
        },
        (error) => {
          console.log("err post=", error);
        });

  }

  const btnGetID = () => {

    fetch(apiUrl + '/2', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8',
      })
    })
      .then(res => {
        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
        return res.json()
      })
      .then(
        (result) => {
          console.log("fetch btnFetchGetStudents= ", result);
          console.log('result.name=', result.name);
        },
        (error) => {
          console.log("err post=", error);
        });

  }

  const btnPost = () => {
    const s = { //pay attention case sensitive!!!! should be exactly as the prop in C#!
      Id: 0,
      Name: 'nir',
      Grade: 77
    };

    fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(s),
      headers: new Headers({
        'Content-type': 'application/json; charset=UTF-8', //very important to add the 'charset=UTF-8'!!!!
        'Accept': 'application/json; charset=UTF-8',
      })
    })
      .then(res => {
        console.log('res=', res);
        return res.json()
      })
      .then(
        (result) => {
          console.log("fetch POST= ", result);
          console.log(result.grade);
        },
        (error) => {
          console.log("err post=", error);
        });
  }

  return (
    <>
      <div className="card">
        <button onClick={btnGet}>Get</button> <br />
        <button onClick={btnGetID}>GetId</button> <br />
        <button onClick={btnPost}>Post</button> <br />
      </div>
    </>
  )
}

export default App
