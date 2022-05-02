import emailjs from 'emailjs-com'
import { useRef } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export default function Contact() {
    const form = useRef();

    const sendEmail= (e) => {
        e.preventDefault();

        emailjs.sendForm('service_kpvgg81', 'template_rhyfj1r', form.current, 'nbtV07kNcpY0_wX9Z')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };



    return (
    <div style={{ textAlign: 'center' }}>
        <br />
        <h1 className="contactHeader">Come try a class:</h1>
        <Form onSubmit={sendEmail}></Form>
        <br /><br /><br /><br />
        <Container>
        <form ref={form} onSubmit={sendEmail}>
        <Row className="mb-3">
            <Col>
            <label for="firstName">First Name*</label>
            <input type="text" name="firstName" className="firstNameBox" />
            </Col>
            <Col>
            <label for="lastName">Last Name</label>
            <input type="text" name="firstName" className="lastNameBox" />
            </Col>
        </Row>
        <Row className="mb-3">
            <label for="email">Email</label>
            <input type="email" name="email" className="infoBox" />
        </Row>
        <Row className="mb-3">
            <label for="phonenumber">Phone*</label>
            <input type="phone" name="number" className="infoBox" />
        </Row>
            <Row className="mb-3">
            <label for="message">Message</label>
            <textarea name="message" className="infoBox" />
        </Row>
            <input type="submit" value="Send" className="contactBtn" />
        </form>
        </Container>
        <br /><br /><br /><br />
        <br />
        <br />
        <br />
    </div>
    )
}