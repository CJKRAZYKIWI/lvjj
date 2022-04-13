import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


export default function News() {
    return (
    <div style={{ textAlign: 'center' }}>
    <h1>News</h1>
      <Row>
        <Col md={{ span: 6, offset: 4 }} >
          <Card style={{ width: '25rem' }} border="light" className="cardBackground">
            <Card.Img variant="top" src="./images/sponsorship.jpg" />
            <Card.Body>
              <Card.Title>Steve Dimopoulos sends 10 students to Connecticut Seminar</Card.Title>
              <Button variant="outline-primary">Read More</Button>
              </Card.Body>
              <Card.Footer className="text-muted">Updated March 4, 2022</Card.Footer>
          </Card>  
        </Col>
      </Row>
    <br />
    </div>
    )
}