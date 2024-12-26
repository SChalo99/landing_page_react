import MyButton from '../../Atoms/Buttons';
import { useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import FormInputs from '../../Molecules/FormInputs';
import './ClientForm.css';

const ClientForm = (props) => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleName = (event) => { setName(event.target.value) };
    const handleSurname = (event) => { setSurname(event.target.value) };
    const handleEmail = (event) => { setEmail(event.target.value) };
    const handlePhone = (event) => { setPhone(event.target.value) };

    const inputs = [
        { label: "Name", type: "text", onTextChange: handleName },
        { label: "Surname", type: "text", onTextChange: handleSurname },
        { label: "Email", type: "email", onTextChange: handleEmail },
        { label: "Phone", type: "text", onTextChange: handlePhone }
    ];

    const button = {
        label: "Contact us",
        action: () => { alert("Form Submitted") }
    };
    return (
        <Container>
            <Col className="form-title">
                <Row>
                    <h2>Get a Quote for Your New Apartment</h2>
                </Row>
                <FormInputs inputs={inputs}></FormInputs>
                <Row>
                    <MyButton label={button.label} action={button.action}></MyButton>
                </Row>
            </Col>
        </Container >
    );
}

export default ClientForm;