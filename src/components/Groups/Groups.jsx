import Members from "../Members/Member";
import "./Groups-style/Groups.css";

const Groups = (props) =>{
    const {titulo, colorSecundario, colorPrimario} = props.members
    const {collaborator} = props
    //  console.log(collaborator.length);
    return(
        <> {collaborator.length > 0 &&
            <section className="groups" style={{background: colorSecundario}}>
                <h3 style={{color: colorPrimario}}>{titulo}</h3>
                <div className="members">
                    {collaborator.map((collaborator, index) => <Members data={collaborator}
                    key={index} primaryColor={colorPrimario}
                    deleteCollaborator={props.deleteCollaborator}/>)}
                </div>
            </section>}
        </>
    )
}

export default Groups