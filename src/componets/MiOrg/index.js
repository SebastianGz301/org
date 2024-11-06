import "./Miorg.css"



const Miorg = (props) =>{

    //Estado - Hooks
    //UseState
    //UseState()
    //const [nombreVariable, FuncionActualizar] = useState(valorInicial)

    // const [mostrar, actualizarMostrar] = useState(true)
    // // const manejarClick = () =>{
    // //     console.log("Mostrar/Ocultar Elemento", !mostrar);
    // //     actualizarMostrar(!mostrar)
    // // }

    return <section className="org-section">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/add.png" alt="Add" onClick={props.cambiarMostrar}/>
    </section>
}


export default Miorg;