import "./ListaOpciones.css"


const ListaOpciones = (props) =>{

    //Metodo Map -> Array.map((equipo, index) =>{
    //  return <option></option>
    //  })
    
    
    const manejarCambio = (e) =>{
        console.log("Cambio de opción", e.target.value)
        props.setTeam(e.target.value);
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue hidden>Seleccionar Equipo</option>
            {props.equipos.map((equipo, index) =>  <option key={index} value={equipo} >{equipo}</option> )}
        </select>

        </div>
}

export default ListaOpciones;
