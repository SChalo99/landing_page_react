import { Container, Row, Col } from "react-bootstrap";
import LogoFooter from "../../Atoms/LogoFooter";

const Footer = () => {
    const footerContent = {

    }

    return (
        <footer>
            <Container>
                <Row class="copyright">
                    <p>Copyright @YourCompany</p>
                </Row>
            </Container>
        </footer>
    )
}


export default Footer;