import "./Members-style/Members.css";
import {AiFillDelete} from "react-icons/ai";
const Members = (props) => {
    
    const {name, puesto, photo, id} = props.data
    const {primaryColor, deleteCollaborator} = props;
    return(
        <div className="members">
            <AiFillDelete className="delete" onClick={() => deleteCollaborator(id)}/>
            <div className="head" style={{backgroundColor: primaryColor}}>
                <img src={photo} alt="perfil-usuario" />
            </div>
            <div className="info">
                <h4>{name}</h4>
                <h5>{puesto}</h5>
            </div>
        </div>
    )
}

export default Members