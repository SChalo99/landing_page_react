import "./Inputs.css";

const Inputs = (props) => {
    const { formLabel, type, onTextChange } = props;
    return (
        <div className="form__div">
            <input type={type} className="form__input" placeholder="" onChange={(e) => { onTextChange(e) }} />
            <label htmlFor="" className="form__label">{formLabel}</label>
        </div>
    )
}

export default Inputs;