import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'

import './App.css';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';

import floor from './assets/img/portfolio/floor.jpg';
import backsplash from './assets/img/portfolio/backsplash.jpeg';
import fireplace from './assets/img/portfolio/fireplace.jpg';
import renovation from './assets/img/portfolio/renovation.jpg';
import tub from './assets/img/portfolio/tub.jpg';

function App() {

  const portfolioLinks = [
    {
      title: 'Backsplash',
      image: backsplash
    },
    {
      title: 'Floor', 
      image: floor
    },
    {
      title: 'Bathtub',
      image: tub
    },
    {
      title: 'Fireplace',
      image: fireplace
    },
    {
      title: 'Renovation',
      image: renovation
    }
  ];

  const services = [
    {
      title: 'Backsplashes',
      caption: 'For interior design in kitchens and bathrooms',
      image: 'fa fa-th fa-stack-1x fa-inverse'

    },
    {
      title: 'Floors',
      caption: 'Professional finish for any room',
      image: 'fa fa-window-minimize fa-stack-1x fa-inverse'

    },
    {
      title: 'Bathtubs',
      caption: 'Including ripping out tub, placing drywall and re-installing tub',
      image: 'fa fa-bath fa-stack-1x fa-inverse'
    },
    {
      title: 'Fireplaces',
      caption: 'Including building over old fireplaces',
      image: 'fa fa-fire fa-stack-1x fa-inverse'
    },
    {
      title: 'Renovation',
      caption: 'We do all kinds of renovation',
      image: 'fa fa-fire fa-stack-1x fa-inverse'
    },
    {
      title: 'And Much More!',
      caption: 'Contact us to find out more',
      image: 'fa fa-wrench fa-stack-1x fa-inverse'
    }
  ];

  return (
  <div className="App">
  <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
      <a href="tel:778-683-7556" className="navbar-brand">778-683-7556</a>
      <div className="navbar-toggler navbar-toggler-right">
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">
            Menu
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#top">Home</Dropdown.Item>
            <Dropdown.Item href="#services">Services</Dropdown.Item>
            <Dropdown.Item href="#portfolio">Gallery</Dropdown.Item>
            <Dropdown.Item href="#contact">Contact</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
        <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#top">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#services">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#portfolio">Gallery</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <header className="masthead">
    <div className="container">
      <div className="intro-text">
        <div className="intro-heading text-uppercase">Pro-Touch Tiling</div>
        <h2 className="section-heading text-uppercase">Surrey, BC</h2>
      </div>
    </div>
  </header>

  <Services services={services}/>

  <Portfolio portfolioLinks={portfolioLinks}/>

  <Contact />

  <footer className="footer">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4">
          <span className="copyright">Copyright &copy; Pro-Touch Tiling 2020</span>
        </div>
        <div className="col-md-4">
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="https://www.instagram.com/protouchtiling/?hl=en">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.facebook.com/protouch.tiling.9">
                <i className="fa fa-facebook-f"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul className="list-inline quicklinks">
          </ul>
        </div>
      </div>
    </div>
  </footer>
  </div>
  );
}

export default App;
