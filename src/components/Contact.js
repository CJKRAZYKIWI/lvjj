import emailjs from 'emailjs-com'
import{ init } from '@emailjs/browser';
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

        emailjs.sendForm('service_u3shsal', 'template_j1ylvjj', form.current, 'B7k1S8XRLntPunrC1')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };



    return (
    <div style={{ textAlign: 'center' }}>
        <h1 className="contactHeader">Contact Us</h1>
        <Form onSubmit={sendEmail}></Form>
        <Container>
        <Form>
             <Form>
                <Row className="mb-3">

                    <Form.Group as={Col} controlId="formGridName" name="firstName" type="input">
                    <Form.Label>First Name*</Form.Label>
                    <Form.Control placeholder="First Name" />
                    </Form.Group>
    
                    <Form.Group as={Col} controlId="formGridName" name="lastName" type="input">
                    <Form.Label>Last Name*</Form.Label>
                    <Form.Control placeholder="Last Name" />
                    </Form.Group>
                </Row>
    
                <Form.Group className="mb-3" controlId="formGridAddress1" name="email" type="input">
                    <Form.Label>Email*</Form.Label>
                    <Form.Control type="email" placeholder="Your Email"/>
                </Form.Group>
    
                <Form.Group className="mb-3" controlId="formGridAddress2" name="number" type="input">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control placeholder="Phone Number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" name="message" type="input">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
    
                <Button variant="primary" type="submit" value="Send">Submit</Button>
                <br />
                <br />
            </Form>
        </Form>
        {/* v */}
        </Container>
        <br />
        <br />
        <br />
        <br />
    </div>
    )
}