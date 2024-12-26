import Topbar from '../Organisms/Topbar';
import MyCarousel from '../Organisms/Carousel';
import Form from '../Organisms/Form';
import { Container, Col, Row } from 'react-bootstrap';

const LandingPage = () => {
    return (
        <Container>
            <Col>
                <Topbar />
                <Row>
                    <Form />
                </Row>
                <Row><MyCarousel custId={"left"} /></Row>
                <Row><MyCarousel custId={"right"} /></Row>
            </Col>
        </Container>
    );
};

export default LandingPage;