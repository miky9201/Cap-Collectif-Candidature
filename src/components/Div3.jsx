import React from 'react';
import coord from './coord.json';

const Div3 = ({title}) => {

      const day = parseInt(coord.birthday.day);
      const month = parseInt(coord.birthday.month);
      const year = parseInt(coord.birthday.year);

      const getAge = (date) => { 
            let diff = Date.now() - date.getTime();
            let age = new Date(diff); 
            return Math.abs(age.getUTCFullYear() - 1970);
      }

      return(
            <div id="div3" className="section-3 flex-col-center-center animate__animated animate__bounceInRight">
                  <h1>{title}</h1>
                  <div className="coord-p card-style">
                        <p><strong>Prénom :</strong> {coord.firstName}</p>
                        <p><strong>Nom : </strong>{coord.lastName}</p>
                        <p><strong>Age : </strong>{getAge(new Date(year, month, day))} ans</p>
                        <p><strong>Téléphone :</strong> <a href="tel:+33622060457">+33 {parseFloat(coord.phone)}</a></p>
                        <p><strong>E-Mail : </strong><a href="mailto:baldaccimike@gmail.com">{coord.email}</a></p>
                  </div>
            </div>
      )
}

export default Div3;