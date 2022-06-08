import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'


import './Account.css'

export default function Account() {

    return(
    <>
    <br /><br /><br /><br /><br />
    <Container>
    <div className="outsideContainer">
       <br /><br />
       <h1>Login</h1>
       <br />
       <label for="email"></label>
       <input type="email" name="email" placeholder="Username" id="inputBar" />
       <br />
       <label for="email"></label><br />
       <input type="password" name="email" placeholder="Password" id="inputBar" />
       <br />
       <div className="checkboxDiv">
       <input type="checkbox" className="checkbox" /> Remember Me
       </div>
       <br /><br />
       <Button className="loginBtn">Enter</Button>
       <br /><br />
       <a href="#" target="_blank" className="accountBtn">Forgot Password?</a>
       <br />
       <a href="#" target="_blank" className="accountBtn">Create an account</a>
       <br /><br />
    </div>
    <br /><br /><br /><br /><br /><br /><br /><br /><br />
    </Container>
    </>
    )
}