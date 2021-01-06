import React, { useState } from 'react';
import logo from '../images/logo.webp';
import Div1 from './Div1';
import Div2 from './Div2';
import Div3 from './Div3';
import DefaultDiv from './DefaultDiv';

const HeroBanner = () => {

      const [div1, setDiv1] = useState(false);
      const [div2, setDiv2] = useState(false);
      const [div3, setDiv3] = useState(false);

      const divSelector = (e) => {
            e.preventDefault();
            let div = parseFloat(e.target.id);

            if (div === 1) {
                  setDiv1(true)
                  setDiv2(false)
                  setDiv3(false)
            } else if (div === 2) {
                  setDiv1(false)
                  setDiv2(true)
                  setDiv3(false)
            } else {
                  setDiv1(false)
                  setDiv2(false)
                  setDiv3(true)
            }
      }

      const DivDisplayer = () => {
            if (div1 === true) {
                  return(<Div1 title="Ma Motivation" />)
            } else if (div2 === true) {
                  return(<Div2 title="En Savoir Plus sur Moi..."/>)
            } else if (div3 === true) {
                  return(<Div3 title="Pour me Contacter"/>)
            } else {
                  return(<DefaultDiv />)
            }
      }

      return(
            <div>
                  <div className="hero-banner">
                        <div className="header-nav flex-row-center-center">
                              <img id="logo" src={logo} alt="logo" />
                              <nav>
                                    <ul className="flex-row-space-around-center">
                                          <li><a id="1" href="#div1" onClick={divSelector}>Ma Motivation</a></li>
                                          <li><a id="2" href="#div2" onClick={divSelector}>En savoir plus sur moi...</a></li>
                                          <li><a id="3" href="#div3" onClick={divSelector}>Pour me contacter</a></li> 
                                    </ul>
                              </nav>   
                        </div>
                  </div>
                  <DivDisplayer />
            </div>
      )
}

export default HeroBanner;