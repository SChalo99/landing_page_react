import Topbar from '../Organisms/Topbar';
import MyCarousel from '../Organisms/Carousel';
import Form from '../Organisms/Form';
import TitleContainer from '../Atoms/TitleContainer';
import { Container, Col, Row } from 'react-bootstrap';

const LandingPage = () => {
    const title = "Live in front of a lake in Arlington. We have already started construction!";

    const section_2 = {
        title: "Coming Soon",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    }

    const section_3 = {
        title: "Featured Properties",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    }

    return (
        <Col>
            <Topbar />
            <Row>
                <Container className="container-image">
                    <Row className='image'>
                        <Col className='text-title' xs={8} sm={8}>
                            <TitleContainer title={title} />
                        </Col>
                        <Col className='col-form' xs={4} sm={4}>
                            <Form />
                        </Col>
                    </Row>
                </Container>

            </Row>
            <Row>
                <Container className="container-image left">
                    <Row>
                        <Col className='text-container subtitle' >
                            <h1>{section_2.title}</h1>
                            <p>{section_2.description}</p>
                        </Col>
                        <Col>
                            <MyCarousel custId={"left"} />
                        </Col>
                    </Row>
                </Container>
            </Row>
            <Row>

                <Container className="container-image right">
                    <Row>
                        <Col>
                            <MyCarousel custId={"right"} />
                        </Col>
                        <Col className='text-container subtitle'>
                            <h1>{section_3.title}</h1>
                            <p>{section_3.description}</p>
                        </Col>

                    </Row>
                </Container>
            </Row>
        </Col>
    );
};

export default LandingPage;