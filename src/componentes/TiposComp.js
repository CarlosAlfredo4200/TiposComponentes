import React from "react";

function ComFuncion() {
  return (
    <div>
      <h1>Componente de función</h1>
      <ComfunDos nombre="Carlos" />
      <CompClass nombre="Alfredo" />
    </div>
  );
}

export default ComFuncion;
//--------------------------------------------

function ComfunDos(props) {
  return <h1>Componente funcional dos {props.nombre}</h1>;
}
//--------------------------------------------

class CompClass extends React.Component {
  /*Para el manejo del estato debo crear constructor que revibe el props
    normalmente un estado sirve para inicializar valores de un componente*/

  constructor(props) {
    super(props);
    this.state = {
      nombre: props.nombre,
      apellido: "Montoya",
    };
  }
  render() {
    return (
      <>
        <h2>componente de Clase desde props {this.props.nombre}</h2>
        <h2>componente de Clase desde estado {this.state.apellido}</h2>
      </>
    );
  }
}
