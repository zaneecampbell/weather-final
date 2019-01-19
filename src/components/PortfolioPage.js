import React from 'react';
import Particles from 'react-particles-js';
import Header from './Header';
import Intro from './Intro';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

export const PortfolioPage = () => {

    // smaller screens less particles for visibility and performance
    if (screen.width < 960) {
        particleConfig.particles.number.value= 10
        particleConfig.particles.line_linked.opacity= 1
    }

    return (
        <div id='top'>
            <Header />
            {/* Everything in here is on top of the "particles" background, everything has to be absolute */}
            <div className='particle-wrapper'>
                <Intro />
                <Particles params={particleConfig} />
            </div>
            {/* End of absolutes */}
            <div id='about' className='about-wrapper'>
                <About />
            </div>
            <div id='portfolio' className='portfolio-wrapper'>
                <Portfolio />
            </div>
            <div id='contact' className='contact-wrapper'>
                <Contact />
            </div>
        </div>
    )
}

export default PortfolioPage;

// Finishing touches on everything


// config for particle js background
const particleConfig = {
    "particles": {
      "number": {
        "value": 50,
        "density": {
          "enable": true,
          "value_area": 700
        }
      },
      "color": {
        "value": "#9c27b0"
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 15,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#9c27b0",
        "opacity": 0.5,
        "width": 1
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 15,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 1,
          "speed": 3
        },
        "repulse": {
          "distance": 105,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }