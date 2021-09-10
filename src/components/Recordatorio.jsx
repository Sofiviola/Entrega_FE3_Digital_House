import React from "react";


class Recordatorio extends React.Component {

  render() {
    return (
      <div className="recordatorio">
        <h3>
          Selección anterior: {this.props.previa}
        </h3>
        <h4>Historial de opciones elegidas:</h4>
        <ul>{this.props.historial.toUpperCase()}</ul>
      </div>
    );
  }
}

export default Recordatorio;
