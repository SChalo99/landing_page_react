import "./Inputs.css";

const Inputs = (props) => {
    const { label, type, onTextChange } = props;
    return (
        <div className="form__div">
            <input type={type} className="form__input" placeholder="" onChange={() => { onTextChange() }} />
            <label for="" className="form__label">{label}</label>
        </div>
    )
}

export default Inputs;