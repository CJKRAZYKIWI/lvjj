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
    <div class="jumbotron jumbotron-fluid">
      <div id="coverPhotoContainer">
      <h1 class="display-4" id="textOnCover">Welcome to Las Vegas Jiu-Jitsu</h1>
        <img src={process.env.PUBLIC_URL + './images/teamlogo.png'} width="75%" height="860px" class="img-fluid" id="coverPhoto" />
        <p id="btnOnCover"><Button variant="light" className="btnOnCover" size="lg" href='/Schedule'>View Our Schedule</Button></p>
        </div>
    </div>
    <br />
  <Carousel className="carouselContainer">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="./images/team.jpg"
        alt="First slide"
      />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./images/team2.jpg"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./images/team3.png"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./images/team4.png"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>

<br />
<Container>
    <Row className="m-auto align-self-center">
      <Col>
        <Card className="cardBackground" id="aboutCard" fluid>
          <Card.Img variant="top" src="./images/modernlvjj.png" height="245" />
          <Card.Title className="CardTitle">About</Card.Title>
            <Card.Body>
              <Card.Text className="CardText">Click below to learn more about us!</Card.Text>
              <Card.Subtitle>
                <center><Button variant="primary" className="CardButton" href="/About">Click Here</Button></center>
              </Card.Subtitle>
            </Card.Body>
        </Card>
        </Col>    
        <Col>
        <Card className="cardBackground" id="aboutCard">
          <Card.Img variant="top" src="./images/mial.png" />
          <Card.Title className="CardTitle">Make it a Lifestyle</Card.Title>
            <Card.Body>
              <Card.Text className="CardText">Apparel shop coming soon!</Card.Text>
              <Card.Subtitle>
                <center><Button variant="secondary" className="CardButton" disabled>Click Here</Button></center>
              </Card.Subtitle>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card className="cardBackground" id="aboutCard">
          <Card.Img variant="top" src="./images/lasvegasjj2.png" />
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

    <div className="newsBody">
      <Container>
      <center><h1>Latest News</h1></center>
      <Row style={{ textAlign: 'center' }}>
        <Col md={{ span: 6, offset: 4 }} >
          <Card className="cardBackground" id="newsCard">
            <Card.Img variant="top" src="./images/sponsorship.jpg" />
            <Card.Body>
              <Card.Title>Steve Dimopoulos sends 10 students to Connecticut Seminar</Card.Title>
              <Button variant="primary" href="/News">Read More</Button>
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