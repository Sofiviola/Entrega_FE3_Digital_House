import React from "react";
import Opciones from "./Opciones";
import Recordatorio from "./Recordatorio";
import data from "./data.json";

class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contador: 2,
            selecionPrevia: "",
            id:"",
            historial:""
        }
       
    }

    handleClick = (e) => {
        let eleccionUsuario = e.target.id;
       if (this.state.contador > 5) {
            alert("Fin");
          } 
          else {
        this.setState({
            contador:this.state.contador + 1,
            selecionPrevia:eleccionUsuario.toUpperCase(),
            id:String(this.state.contador) + eleccionUsuario,
            historial:this.state.historial + eleccionUsuario
        });
    }}

    componentDidUpdate() {
        return this.state
    }

    render() {
        let {id}=this.componentDidUpdate()
        let info = data.filter( el => el.id ===id);
        let usarData = info.length>0? info : [data[0]];
        return (
            <div className="layout">
                {usarData.map((element, index) =>
                    <>
                        <h1 className="historia" key={`id${index}`}>{element.historia}</h1>
                        <Opciones  key={index} handleClick={this.handleClick} opcionA={element.opciones.a} opcionB={element.opciones.b}/>
                    </>
                
                )}
                <Recordatorio previa={this.state.selecionPrevia} historial={this.state.historial}/>

            </div>

        )

    }
}


export default Layout;

