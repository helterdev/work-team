import "./Members-style/Members.css";

const Members = (props) => {
    const {name, puesto} = props.data
    return(
        <div className="members">
            <div className="head">
                <img src="https://github.com/helterdev.png" alt="photo" />
            </div>
            <div className="info">
                <h4>{name}</h4>
                <h5>{puesto}</h5>
            </div>
        </div>
    )
}

export default Members