import Container from 'react-bootstrap/Container'
import Register from './Register'
import Login from "./Login"


export default function Account() {

    return(
    <>
    <br /><br /><br /><br /><br />
    <Container>
    <div className="outsideContainer">
       <br /><br />
       <h1>My Account</h1>
    <br/>
        <Register/>
    <br/>
    <br/>
        <h1>Login</h1>
    <br/>
        <Login/>
    </div>
    <br /><br /><br /><br /><br /><br /><br /><br /><br />
    </Container>
    </>
    )
}