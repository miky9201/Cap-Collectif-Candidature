import React, { useState } from 'react';
import Div1 from "./Div1";
import Div2 from "./Div2";
import Div3 from "./Div3";
import WelcomingForm from './WelcomingForm';

const DefaultDiv = ({ title, message }) => {

      const [div4, setDiv4] = useState(false);
      const [div5, setDiv5] = useState(false);
      const [div6, setDiv6] = useState(false);
      const [defaultDiv, setDefaultDiv] = useState(false);
      const  [buttonClicked, setButtonClicked] = useState(false);
      

      const divSelector = (e) => {
            e.preventDefault();
            let div = e.target.id;
            setButtonClicked(true);

            if (div === "4") {
                  setDiv4(true)
                  setDiv5(false)
                  setDiv6(false)
                  setDefaultDiv(false)
              
            } else if (div === "5") {
                  setDiv4(false)
                  setDiv5(true)
                  setDiv6(false)
                  setDefaultDiv(false)
    
            } else if (div === "6") {
                  setDiv4(false)
                  setDiv5(false)
                  setDiv6(true)
                  setDefaultDiv(false)

            } else if (div === "logo") {
                  setDiv4(false)
                  setDiv5(false)
                  setDiv6(false)
                  setDefaultDiv(true)

            } else {
                  setDiv4(false)
                  setDiv5(false)
                  setDiv6(false)
                  setDefaultDiv(false)
            }
      }

      const DivDisplayer = () => {
            if (div4 === true) {
                  return(<Div1 title="Ma Motivation" />)
            } else if (div5 === true) {
                  return(<Div2 title="Qui suis-je ?"/>)
            } else if (div6 === true) {
                  return(<Div3 title="Pour me Contacter"/>)
            } else if (defaultDiv === true) {
                  return(<DefaultDiv message="(Oui, j'avoue c'était juste un effet pour t'impressionner...)"/>)
            } else {
                  return(<WelcomingForm />)
            }
      }
      
     if (buttonClicked) {
           return(<DivDisplayer />)
     } else {
            return(
                  <div id="div-default" className="section-default flex-col-center-center animate__animated animate__bounceInRight">
                        <h1 className="animate__animated">Bienvenue et merci pour ta confiance <span className="pink">{title}</span> !</h1>
                        <p>{message}</p>
                        <div className="button-container flex-row-space-around-center">
                              <a id="4" href="#div1" onClick={divSelector}>Ma Motivation</a>
                              <a id="5" href="#div2" onClick={divSelector}>Qui suis-je ?</a>
                              <a id="6" href="#div3" onClick={divSelector}>Pour me contacter</a>
                        </div>
                  </div>
            )
     }
}

export default DefaultDiv;