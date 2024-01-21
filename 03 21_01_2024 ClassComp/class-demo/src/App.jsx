import './App.css';
import CCCalc from './ClassComps/CCCalc';
import CCCar from './ClassComps/CCCar';
import EHeader from './Emlements/EHeader';
import FCStudent from './FunctionalComsp/FCStudent';

function App() {

  return (
    <>
      {EHeader}
      <h1>Ruppin</h1>
      <div className="card">

        <CCCalc />

        <CCCar speed={200} model="BMW" color="red" />
        <CCCar speed={130} model="KIA" color="black" />

        <FCStudent id={1} name="avi" grade={100} />
        <FCStudent id={2} grade={80} name="benny" />
      </div>
    </>
  )
}

export default App
