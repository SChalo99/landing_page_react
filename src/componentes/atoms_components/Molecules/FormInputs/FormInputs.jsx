import { Row } from "react-bootstrap";
import Inputs from "../../Atoms/Inputs";

const FormInputs = (props) => {
    const { inputs } = props;

    return (
        inputs.map((input) => {
            return (
                <Row key={input.label}>
                    <Inputs formLabel={input.label} type={input.type} onTextChange={input.onTextChange}></Inputs>
                </Row>
            )
        })
    )
}

export default FormInputs;