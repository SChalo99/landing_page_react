import { Container } from "react-bootstrap";

const TitleContainer = (props) => {
    const { title } = props;
    const style = {
        background: "white",
        display: "flex",
        justifyContent: "center",
        opacity: "0.8",
        borderRadius: "40px",
        padding: "10px",
    }
    return (
        <Container style={style}>{title}</Container>
    )
}

export default TitleContainer;