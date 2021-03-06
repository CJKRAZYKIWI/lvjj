import { useEffect, useCallback } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

import { useDispatch, useSelector } from "react-redux";

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import Home from './components/Home'
import About from './components/About'
import Instructors from './components/Instructors'
import Schedule from './components/Schedule'
import Shop from './components/Shop'
import Contact from './components/Contact'
import News from './components/News/News'
import Footer from './components/Footer'
import Account from './components/Account'
import Testimonials from './components/Testimonials/Testimonials'


import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";

function App() {

  useEffect(() => {
    document.title ="Las Vegas Jiu-Jitsu"
  }, []);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <div className="App">
    <BrowserRouter>
    <header>
      <Navbar className="NavBar" expand="lg" sticky="top">
          <Navbar.Brand href="/"><img src={process.env.PUBLIC_URL + './images/lvjj.png'} height="65" width="65"/></Navbar.Brand>
          <Navbar.Toggle id="navBar-toggle" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-end" style={{ width: "100%" }}>
              <Nav.Link href="/" style={{color:"white"}} className="navBar-li">Home</Nav.Link>
              <Nav.Link href="/About" style={{color:"white"}} className="navBar-li">About</Nav.Link>
              <Nav.Link href="/Instructors" style={{color:"white"}} className="navBar-li">Instructors</Nav.Link>
              <Nav.Link href="/Schedule" style={{color:"white"}} className="navBar-li">Schedule</Nav.Link>
              <Nav.Link href="/News" style={{color:"white"}} className="navBar-li">News</Nav.Link>
              <Nav.Link href="/Testimonials" style={{color:"white"}} className="navBar-li">Testimonials</Nav.Link>
              <Nav.Link href="/Contact" style={{color:"white"}} className="navBar-li">Contact</Nav.Link>
              { currentUser
                ?
                  <a style={{'background-color': 'yellow'}} href="/" className="nav-link" onClick={logOut}>
                    Log Out
                  </a>
                : 
                  <Nav.Link href="/Account" style={{color:"white"}} className="navBar-li" id="accountBtn">Account</Nav.Link> 
              }
            </Nav>
            </Navbar.Collapse>
      </Navbar>

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Instructors" element={<Instructors />} />
          <Route path="/Schedule" element={<Schedule />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/News" element={<News />} />
          <Route path="/Testimonials" element={<Testimonials />} />
          <Route path="/Account" element={<Account />} />
      </Routes>
    </header>
    </BrowserRouter>
    <Footer />
  </div>
  )
}

export default App;