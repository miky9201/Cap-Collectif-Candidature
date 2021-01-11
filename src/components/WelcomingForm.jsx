import React, { useState } from 'react';
import DefaultDiv from './DefaultDiv';

const WelcomingForm = () => {
      const [inputValue, setinputValue] = useState("");
      const [inputStatus, setInputStatus] = useState(false);

      
      const handleChange = (e) => {
            setinputValue(e.target.value)
      }

      const handleSubmit = (e) => {
            e.preventDefault();
            setInputStatus(true);
            return(inputValue);

      }
      
      if(inputStatus === false) {
            return(
                  <div className="section-form flex-col-center-center">
                        <h1>Quelques petites informations pour débuter</h1>
                        <form onSubmit={handleSubmit} className="flex-col-space-between-center">
                              <label>Quel est ton Prénom ?</label>
                              <input className="text-input" placeholder="John-David (par exemple...)" type="text" value={inputValue} onChange={handleChange} />
                              <input type="submit" value="Envoyer" />
                        </form>
                  </div>     
            )
      } else {
            return < DefaultDiv title={inputValue} message="(Oui, j'avoue c'était juste un effet pour t'impressionner...)" />
      }
}

export default WelcomingForm;