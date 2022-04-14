import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function News() {
    return (
    <div style={{ textAlign: 'center' }}>
    <h1>Team News</h1>
      <Row>
        <Col md={{ span: 6, offset: 1 }} >
          <Card style={{ width: '25rem' }} className="cardBackground">
            <Card.Img variant="top" src="./images/sponsor.jpg" />
            <Card.Body>
              <Card.Title>Steve Dimopoulos sends 10 students to Connecticut Seminar</Card.Title>
              </Card.Body>
              <Card.Footer className="text-muted">Updated March 4, 2022</Card.Footer>
          </Card>  
        </Col>
      </Row>
    
    <br /><br /><br /><br /><br /><br /><br />
    <br />
    <br />
    <br />
    </div>
    )
}