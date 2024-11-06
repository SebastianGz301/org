import './App.css';
import Header from './componets/Header/Header';
import Formulario from './componets/Formulario/Form';
import Miorg from './componets/MiOrg';
import { useState } from 'react';
import Equipo from './componets/Equipo';
import Footer from './componets/Footer';
import { v4 as uuidv4 } from 'uuid';


function App() {
  
  const [mostrarFormulario,actualizarMostrar] = useState(false);
  const [colaboradores,actualizarColaboradores] = useState([{
    id: uuidv4(),
    team: "Programación",
    foto: "https://github.com/SebastianGz301.png",
    nombre: "Sebastian Gomez",
    puesto: "Desarrollador de Sofware",
    fav: true
  },
  {
    id: uuidv4(),
    team: "Front End",
    foto: "https://lh3.googleusercontent.com/a-/ALV-UjUPAoEWg3S2uLEifEAXLAQfP4ocmO3kD7LWO-4sxosOJKF6cEhx=s32-c",
    nombre: "Daniel Rubio",
    puesto: "Desarrollador de Software",
    fav: true
  },
  {
    id: uuidv4(),
    team: "Front End",
    foto: "https://lh3.googleusercontent.com/a/ACg8ocKetgKbEnovEV8N57q5DT-BhUAGNDr4Y1kx4sVgk1iBgNAsA5I=s32-c-mo",
    nombre: "Brian Rodriguez",
    puesto: "Ingeniero en Sistemas",
    fav: true
  },
  {
    id: uuidv4(),
    team: "Data Science",
    foto: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Bill_Gates_-_2023_-_P062021-967902_%28cropped%29.jpg",
    nombre: "Bill Gates",
    puesto: "Dev. FullStack",
    fav: false
  },
  {
    id: uuidv4(),
    team: "Data Science",
    foto: "https://upload.wikimedia.org/wikipedia/commons/0/01/LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg",
    nombre: "Linus Torvalds",
    puesto: "Devops",
    fav: true
  },
  {
    id: uuidv4(),
    team: "Data Science",
    foto: "https://upload.wikimedia.org/wikipedia/commons/4/4e/John_Carmack_at_GDCA_2017_--_1_March_2017_%28cropped%29.jpeg",
    nombre: "John Carmack",
    puesto: "Desarrollador de software",
    fav: false
  },
  {
    id: uuidv4(),
    team: "Devops",
    foto: "https://cdn.urbantecno.com/urbantecno/s/2023-01-05-11-27-elon-musk.png",
    nombre: "Elon Musk",
    puesto: "CEO",
    fav: false
    
  },
  {
    id: uuidv4(),
    team: "Devops",
    foto: "https://img.a.transfermarkt.technology/portrait/big/357565-1682587890.jpg?lm=1",
    nombre: "Rodri",
    puesto: "Justo Balon de oro y Devops",
    fav: false
  },
  {
    id: uuidv4(),
    team: "Devops",
    foto: "https://github.com/SebastianGz301.png",
    nombre: "Sebastian Gomez",
    puesto: "Desarrollador de Software",
    fav: false
  },
  {
    id: uuidv4(),
    team: "Devops",
    foto: "https://lh3.googleusercontent.com/a-/ALV-UjUPAoEWg3S2uLEifEAXLAQfP4ocmO3kD7LWO-4sxosOJKF6cEhx=s32-c",
    nombre: "Daniel Rubio",
    puesto: "Ingeniero en Sistemas",
    fav: false
  }
  
]);


  //Equipos
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuidv4(),
      titulo:"Programación",
      colorPrimario:"#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuidv4(),
      titulo:"Front End",
      colorPrimario:"#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuidv4(),
      titulo:"Data Science",
      colorPrimario:"#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuidv4(),
      titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario: "#FDE7E8F"
    },
    {
      id: uuidv4(),
      titulo:"UX y diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuidv4(),
      titulo:"Móvil",
      colorPrimario:"#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuidv4(),
      titulo:"Innovación Y Gestión",
      colorPrimario:"#FF8A29",
      colorSecundario: "#FFEEDF"
    }
])

  //Ternario --> condicion ? seMuestra : noSeMuestra
  //Condicion && seMuestra

  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario)
  }
  
  //Registrar Colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo Colaborador:", colaborador);
    //Spread Operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar Colaborador
  const eliminarColaborador = (id) => {
    console.log("Colaborador Eliminado:", id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar Color
  const actualizarColor = (color, id) => {
    console.log("Nuevo Color:", color, id);
    const equiposActualizados = equipos.map((equipo) =>{
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }


    //Crear Equipo
    const crearEquipo = (nuevoEquipo) =>{
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuidv4()}])

    }

    //Like
    const like = (id) => {
    const colaboradesActualizados = colaboradores.map((colaborador) =>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
      actualizarColaboradores(colaboradesActualizados)
    }

  return (
    <div>
      <Header/>
      {mostrarFormulario && <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
          />
        }
      
      
      <Miorg cambiarMostrar={cambiarMostrar}/> 
      
      { 
        equipos.map( (team) =><Equipo
        datos={team} 
        key={team.titulo}
        colaboradores={colaboradores.filter(colaborador => colaborador.team === team.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
        />
      )
      }
    <Footer/>
    </div>
  );
}

export default App;
