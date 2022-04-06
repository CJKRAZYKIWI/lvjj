import Carousel from 'react-bootstrap/Carousel'


import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'


export default function Home() {
    return(
    <>
    <div className="coverPhoto">
      <img src={process.env.PUBLIC_URL + './images/tournament.jpg'} width="75%" height="860px" className="coverPhoto" />
      <h1 className="textOnCover">Welcome to Las Vegas Jiu-Jitsu</h1>
      <Button variant="light" className="btnOnCover" size="lg" href='/Schedule'>View Our Schedule</Button>
    </div>

    <br />
    <div className="cardBody">
      <Container>
      <Row>
      <Col>
        <Card border="light" style={{ width: '25rem' }}>
          <Card.Img variant="top" src="./images/modernlvjj.png" height="245" />
          <Card.Title className="CardTitle">About</Card.Title>
            <Card.Body>
              <Card.Text className="CardText">Click below to learn more about u!</Card.Text>
              <Card.Subtitle>
                <center><Button variant="primary" className="CardButton" href="/About">Click Here</Button></center>
              </Card.Subtitle>
            </Card.Body>
        </Card>
        </Col>    
        <Col>
        <Card border="light" style={{ width: '25rem' }}>
          <Card.Img variant="top" src="./images/mial.png" />
          <Card.Title className="CardTitle">Make it a Lifestyle</Card.Title>
            <Card.Body>
              <Card.Text className="CardText">Come check out our gear!</Card.Text>
              <Card.Subtitle>
                <center><Button variant="secondary" className="CardButton" disabled>Click Here</Button></center>
              </Card.Subtitle>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card border="light" style={{ width: '25rem' }}>
          <Card.Img variant="top" src="./images/lasvegasjj.png" />
          <Card.Title className="CardTitle">Interested in joining us?</Card.Title>
            <Card.Body>
              <Card.Text className="CardText">Click below to contact us!</Card.Text>
              <Card.Subtitle>
                <center><Button variant="primary" className="CardButton" href="/Contact">Click Here</Button></center>
              </Card.Subtitle>
            </Card.Body>
        </Card>
        </Col>
      </Row>
      </Container>
      <br />
    </div>
    {/* <hr /> */}

    <div className="newsBody">
      <Container>
      <center><h1>Latest News</h1></center>
      <Row style={{ textAlign: 'center' }}>
        <Col md={{ span: 6, offset: 4 }} >
          <Card style={{ width: '25rem' }} border="light">
            <Card.Img variant="top" src="./images/sponsorship.jpg" />
            <Card.Body>
              <Card.Title>Steve Dimopoulos sends 10 students to Connecticut Seminar</Card.Title>
              <Button variant="outline-primary">Read More</Button>
              </Card.Body>
              <Card.Footer className="text-muted">Updated March 4, 2022</Card.Footer>
          </Card>  
        </Col>
      </Row>
      </Container>
    <br />
    </div>
    <br />
    {/* <hr /> */}
    </>
    )
}