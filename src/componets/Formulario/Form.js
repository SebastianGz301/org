import "./Form.css"
import Campo from '../Campo'
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton/Boton"
import { act, useState } from "react"

const Formulario = (props) =>{

    const [nombre,setNombre] = useState("")
    const [puesto,setPuesto] = useState("")
    const [foto,setFoto] = useState("")
    const [team,setTeam] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const {registrarColaborador, crearEquipo} = props



    const manejarEnvio = (e) =>{
        e.preventDefault()
        console.log("Manejar el envio")
        let datosEnviar = {
            nombre,
            puesto,
            foto,
            team
        }
        registrarColaborador(datosEnviar);
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo
            titulo="Nombre"
            placeholder="Ingresar Nombre" 
            required 
            valor={nombre} 
            setValor={setNombre}
            /> 
            <Campo
            titulo="Puesto" 
            placeholder="Ingresar Puesto" 
            required
            valor={puesto} 
            setValor={setPuesto}
            />
            <Campo 
            titulo="Foto"   
            placeholder="Ingresar Enlace de Foto" 
            required
            valor={foto} 
            setValor={setFoto}
            />
            <ListaOpciones 
            valor={team}
            setTeam={setTeam}
            equipos={props.equipos}/>
            <Boton texto="Crear"/>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo
            titulo="Titulo"
            placeholder="Ingresar Titulo" 
            required 
            valor={titulo} 
            setValor={actualizarTitulo}
            /> 
            <Campo
            titulo="Color" 
            placeholder="Ingresar el Color en Hex." 
            required
            valor={color} 
            setValor={actualizarColor}
            type="color"
            />
            <Boton texto="Registrar Equipo"/>
        </form>
    </section>
}

export default Formulario