import "./Input.css";
const Inputs = (props) => {
    // console.log(props.type);
    const {titulo, placeholder, required, value, setValue, type, name } = props;
    const change = (e) => {
        // console.log(e.target.value);
        const value = e.target.value;
        setValue(value);
    }
    return(
        <div className={`campo campo_${type}`}>
            <label>{titulo}</label>
            <input type={type} placeholder={placeholder} required={required} 
            onChange={change} value={value} name={name}/>
        </div>
    )
}
export default Inputs