import "./Formulario.css";
import Inputs from "../Inputs/Inputs";
import { useState } from "react";
import OptionList from "../OptionList/OptionList";
import Boton from "../Boton/Boton";
const Form = (props) => {
    // console.log(props.equipos);
    const [name, setName] = useState("");
    const [puesto, setPuesto] = useState("");
    const [photo, setPhoto] = useState(" ");

    //manejador de envio
    const submit = (e) => {
        e.preventDefault();
    }
    return(
        <section className="form">
            <form onSubmit={submit}>
                <Inputs titulo="Nombre" placeholder= "Ingrese nombre" 
                value={name} setValue={setName} type="text" name="name" required/>
                <Inputs titulo= "Puesto" placeholder="Ingrese puesto"
                type= "text" value={puesto} setValue={setPuesto} name="puesto" required/>
                <Inputs titulo="Photo" placeholder="Ingrese enlace de foto"
                value= {photo} setValue={setPhoto} type="url" name="photo" required/>
                <OptionList equipos={props.equipos}/>
                <Boton/>
            </form>
        </section>
    )
}

export default Form