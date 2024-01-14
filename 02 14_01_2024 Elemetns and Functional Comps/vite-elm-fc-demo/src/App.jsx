import viteLogo from '/vite.svg'
import './App.css'
import EHeader from './ELements/EHeader'
import FCStudent from './Functional Comps/FCStudent'


function App() {
  
  let gr1=100;
  
  
  return (
    <div>
      {EHeader}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Ruppin</h1>
      <div className="card">
      </div>
      <FCStudent id="1" name="avi" grade={gr1}/>
      <FCStudent id={"2"} name="benny" grade={99}/>
      <FCStudent id={3} name="charlie" grade={50}/>
      <p className="read-the-docs">
        footer
      </p>
    </div>
  )
}

export default App
