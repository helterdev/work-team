import Members from "../Members/Member";
import "./Groups-style/Groups.css";

const Groups = (props) =>{
    const {titulo, colorSecundario, colorPrimario} = props.members
    const {collaborator} = props
     console.log(collaborator);
    return(
        <section className="groups" style={{background: colorSecundario}}>
            <h3 style={{color: colorPrimario}}>{titulo}</h3>
            <div className="members">
                {collaborator.map((collaborator, index) => <Members data={collaborator}
                key={index}/>)}
            </div>
        </section>
    )
}

export default Groups