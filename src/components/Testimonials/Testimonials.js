import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './Testimonials.css'

export default function Testimonials() {
    return(
    <>
    <Container>
    <br />
        <h1>Las Vegas Jiu-Jitsu Testimonials</h1>
    <br />
    <hr />
    <h1>Testimonials</h1>
    <br />
    {/* Reviews go in here? */}
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <b>Gordon Ryan 5/5</b>
    <br /><br />
    <hr />
    <br />
    <Row> 
        <Col>
            <h3>Leave a review</h3>
        </Col> 
    </Row>
    <br /><br />
    <Row>  
        <Col>
            <label for="message">Your Review</label>
            <textarea name="message" className="infoBox" />
        </Col>
    </Row>
    <br />
    <Button>Add</Button>
    </Container>
    <br /><br />
    </>    
    )
}