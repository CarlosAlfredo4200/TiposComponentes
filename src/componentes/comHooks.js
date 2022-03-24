import React from "react";

class Contador extends React.Component {
  /*declarar el estado */
  state = { contador: 0 };
  render() {
    return (
      <div>
        <span>El contador esta en {this.state.contador}</span>
        <br></br>
        <button className="contador1"
          onClick={() => this.setState({ contador: this.state.contador + 1 })}
        >
          Incrementar contador
        </button>
      </div>
    );
  }
}
export default Contador;
