import "./OptionList.css";

const OptionList = (props) => {
    // console.log(props);
    const {equipos} = props
    return(
        <div className="option__list">
            <label>Equipos</label>
            <select name="" id="">
                <option value="">Selecciona un equipo</option>
                {equipos.map((option, index) => <option key={index}>{option}</option>)}
            </select>
        </div>
    )
}

export default OptionList