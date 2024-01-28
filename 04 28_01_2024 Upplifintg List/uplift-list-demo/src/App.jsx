import './App.css';
import CCChild from './ClassComps/CCChild';
import CCMain from './ClassComps/CCMain';
import CCPersonsList from './ClassComps/CCPersonsList';

function App() {

  function getDatafromChild(data) {
    console.log(data);
  }  

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <CCMain/>
        <CCPersonsList/>
        <CCChild  name="avi" bonus={7} sendData2Parent={getDatafromChild} />
      </div>
    </>
  )
}

export default App
