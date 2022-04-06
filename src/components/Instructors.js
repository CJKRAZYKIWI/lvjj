import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function Instructors() {

    return (
    <div style={{ textAlign: 'center' }}>
        <Container>
        <h1>Cresencio Zamora</h1>
        <h5>Founder & Head Professor</h5>
        <br />
        <Row>
            <Col>
            <img src={process.env.PUBLIC_URL + './images/zamora.jpg'} height="505px" width="505px" />
            </Col>
                <Col className="resumeBody">
                    <h4>Titles:</h4>
                    <h4 className="titles">• 2014 IBJJF World NoGi Champion</h4>
                    <h4 className="titles">• 2016 IBJJF World Champion</h4>
                    <h4 className="titles">• 2015 SJJIF World Champion</h4>
                    <h4 className="titles">• 2017 JJWL World Champion</h4>
                </Col>
        </Row>
        </Container>
        <br />
        <Container>
            <Row>
            <Col>
                <p>Professor Cresencio Zamora is 2nd degree black belt and received his black belt under Amilcar Cipili. He is a highly decorated jiu jitsu black belt and has over 90 medals during his career.</p>
                <p>He currently resides in Las Vegas, NV and is currently the founder and head instructor of Las Vegas Jiu-Jitsu.</p>
            </Col>
            </Row>
        </Container>
        <div  className="bruceBody">
        <br />
        <Container>
        <h1>Bruce Morgenstern</h1>
        <h3>Black Belt • Instructor</h3>
        <br />
        <Row>
            <Col>
            <img src={process.env.PUBLIC_URL + './images/bruce.png'} height="505px" width="575px" />
            </Col>
                <Col className="resumeBody">
                    <h4>Titles:</h4>
                    <h4 className="titles">• 2014 IBJJF World NoGi Champion</h4>
                    <h4 className="titles">• 2016 IBJJF World Champion</h4>
                    <h4 className="titles">• 2015 SJJIF World Champion</h4>
                    <h4 className="titles">• 2017 JJWL World Champion</h4>
                </Col>
        </Row>
        </Container>
        <br />
        <Container>
            <Row>
            <Col>
                <p>Professor Bruce Morgenstern is 2nd degree black belt and received his black belt under Amilcar Cipili. He is a highly decorated jiu jitsu black belt and has over 90 medals during his career.</p>
                <p>He currently resides in Las Vegas, NV and is the founder and head instructor of Las Vegas Jiu-Jitsu.</p>
            </Col>
            </Row>
        </Container>
        <br />
        <br />
        </div>
    </div>
    )
}