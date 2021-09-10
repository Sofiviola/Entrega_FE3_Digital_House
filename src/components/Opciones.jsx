import React from "react";



class Opciones extends React.Component {
    
   
    render() {
        return (
            <div className="opciones">
                <div className="opcion"> 
                    <button  id ="a" onClick={this.props.handleClick} className="botones"> A </button>
                    <h2>{this.props.opcionA}</h2>
                </div>
                <div className="opcion">
                    <button  id ="b" onClick={this.props.handleClick} className="botones"> B </button>
                    <h2 >{this.props.opcionB}</h2>
                </div>
            </div>
        );
    }
}

export default Opciones;
