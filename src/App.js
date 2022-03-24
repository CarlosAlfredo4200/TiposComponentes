import logo from "./logo.svg";
import "./App.css";
import PokApp from "./componentes/comClase/componenteClase";
import Contador from "./componentes/comHooks";
import ConHooks2 from "./componentes/ComFuncionales/comHooks2";
import CompFuncionVSCompClass from './componentes/TiposComp.js'
function App() {
  return (
    <div className="App">
      <div className="container">
        <PokApp />
      </div>

      <div>
        <Contador />
      </div>

      <div>
        <ConHooks2 />
      </div>

      <h1 className="title">Tarear programadas</h1>
      <div className="container">
        <div className="box">
          <p className="title">TITULO</p>
          <div className="desc">Descripción</div>
        </div>

        <div className="box">
          <p className="title">TITULO</p>
          <div className="desc">Descripción</div>
        </div>

        <div className="box">
          <p className="title">TITULO</p>
          <div className="desc">Descripción</div>
        </div>

        <div className="box">
          <p className="title">TITULO</p>
          <div className="desc">Descripción</div>
        </div>
      </div>
      <CompFuncionVSCompClass />
    </div> //FIN


    
  );
}
export default App;
