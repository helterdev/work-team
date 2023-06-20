import './App.css';
import Form from './components/Formulario/Formulario';
import Header from './components/Header/Header';
function App() {
  const equipos = [
    {
      titulo: "Programacion",
      colorPrimario: '#57c278',
      colorSecundario: "#d9f7e9"
    },
    {
      titulo: "Front End",
      colorPrimario: '#82cffa',
      colorSecundario: '#e8f8ff',
    }
    ,
    {
      titulo: "Data Science",
      colorPrimario: '#a6d157',
      colorSecundario: '#f0f8e21',
    }
    ,
    {
      titulo: "Devops",
      colorPrimario: '#e06b69',
      colorSecundario: '#fde7eb',
    }
    ,
    {
      titulo: "UX y Diseno",
      colorPrimario: '#db6ebf',
      colorSecundario: '#fae9f5',
    }
    ,
    {
      titulo: "Movil",
      colorPrimario: '#ffba05',
      colorSecundario: '#fff5d9',
    }
    ,
    {
      titulo: "Innovacion y gestion",
      colorPrimario: '#ff8a29',
      colorSecundario: '#ffeedf',
    }
  ]
  return (
    <>
      <Header/>
      <Form equipos={equipos.map((equipo) => equipo.titulo)}/>
    </>
  )
}

export default App;
