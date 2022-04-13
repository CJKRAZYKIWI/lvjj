import { useEffect, useState } from 'react';
// import { Parallax } from 'react-parallax';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'


import Home from './components/Home'
import About from './components/About'
import Instructors from './components/Instructors'
import Schedule from './components/Schedule'
import Shop from './components/Shop'
import Contact from './components/Contact'
import News from './components/News'
import Footer from './components/Footer'

function App() {
  const [data, setData] = useState()

  useEffect(() => {
    document.title ="Las Vegas Jiu-Jitsu"
  }, []);

  useEffect(() => {
    fetch("/api")
      .then(response => {
         console.log(response)
         return response.json()
       })
      .then(json => {
        console.log(json)
        return setData(json)
      })
  }, [])

    return (
      <div className="App">
      <BrowserRouter>
      <header>
        <Navbar bg="dark" expand="lg" sticky="top" className="NavBar">
            <Navbar.Brand href="/" style={{color:"white"}}><img src={process.env.PUBLIC_URL + './images/lvjj.png'} height="55" width="55" /> Las Vegas Jiu-Jitsu</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            </Navbar.Collapse>
              <Nav className="justify-content-right">
                <Nav.Link href="/" style={{color:"white"}}>Home</Nav.Link>
                <Nav.Link href="/About" style={{color:"white"}}>About</Nav.Link>
                <Nav.Link href="/Instructors" style={{color:"white"}}>Instructors</Nav.Link>
                <Nav.Link href="/Schedule" style={{color:"white"}}>Schedule</Nav.Link>
                <Nav.Link href="/News" style={{color:"white"}}>News</Nav.Link>
                <Nav.Link href="/Contact" style={{color:"white"}}>Contact</Nav.Link>
              </Nav>
        </Navbar>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Instructors" element={<Instructors />} />
            <Route path="/Schedule" element={<Schedule />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/News" element={<News />} />
        </Routes>
      </header>
      </BrowserRouter>
      <Footer />
    </div>
    )
}

export default App;
