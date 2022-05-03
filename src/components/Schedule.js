import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'


export default function Schedule() {
    return (
    <div style={{ textAlign: 'center' }}>
        <div className="scheduleBody">
        <Container>
            <h1>Schedule</h1>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td id="notTargeted">9:30am</td>
                        <td id="classTime">Open Mat*</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>10:00</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td id="notTargeted">11:00</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>12:00pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td id="notTargeted">1:00</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>2:00</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td id="notTargeted">3:00</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>4:00</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td id="notTargeted">5:00</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>6:00</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td id="notTargeted">6:30</td>
                        <td></td>
                        <td id="classTime">Gi Adults BJJ
                            <br />6:30 - 8pm
                        </td>
                        <td id="classTime">No-Gi Adults BJJ
                            <br />6:30 - 8pm
                        </td>
                        <td id="classTime">Gi Adults BJJ
                            <br />6:30 - 8pm
                        </td>
                        <td id="classTime">Gi Adults BJJ
                            <br />6:30 - 8pm
                        </td>
                        <td id="classTime">No-Gi Adults BJJ
                            <br />6:30 - 8pm
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>7:00</td>
                        <td></td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td id="notTargeted">8:00</td>
                        <td></td>
                        <td id="notTargeted">-</td>
                        <td id="notTargeted">-</td>
                        <td id="notTargeted">-</td>
                        <td id="notTargeted">-</td>
                        <td id="notTargeted">-</td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </Container>
        <p>* Open mat schedule subject to change on a weekly basis.</p>
        <br />
        <br />
        <br />
        </div>
    </div>
    )
}