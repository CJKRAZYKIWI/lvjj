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
          <Card className="cardBackground" id="newsCard">
            <Card.Img variant="top" src="./images/sponsor.jpg" />
            <Card.Body>
              <Card.Title>Steve Dimopoulos sends 10 students to Connecticut Seminar</Card.Title>
              <Card.Text id="newsText">Steve Dimopoulos Injury Law of Las Vegas sponsors Las Vegas Jiu-Jitsu and sends 10 students to Connecticut for an Invictus Seminar!</Card.Text>
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