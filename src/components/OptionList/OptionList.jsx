import "./OptionList.css";

const OptionList = (props) => {
    // console.log(props);
    const {equipos, value, setValue} = props
    const updateValue = (e) => {
        const value = e.target.value;
        setValue(value)
    }
    return(
        <div className="option__list">
            <label>Equipos</label>
            <select name="equipo" id="equipo" value={value} onChange={updateValue} >
                <option value="">Selecciona un equipo</option>
                {equipos.map((option, index) => <option key={index}>{option}</option>)}
            </select>
        </div>
    )
}

export default OptionList