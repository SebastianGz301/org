import "./campo.css"


const Campo = (props) =>{
    const placeholderModificador = `${props.placeholder}...`

    //Desustruracion
    const {type = ""} = props

    const manejarCambio = (e) => {
        props.setValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
            placeholder={placeholderModificador} 
            required={props.required} 
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />
    </div>
}


export default Campo