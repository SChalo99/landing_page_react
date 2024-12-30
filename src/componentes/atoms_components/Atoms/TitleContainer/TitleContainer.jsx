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
        fontSize: "xx-large",
    }
    return (
        <Container style={style}><h1>{title}</h1></Container>
    )
}

export default TitleContainer;