import React from 'react';

const handleSubmit = ()=> console.log("handleSubmit");
const handleChange =()=> console.log("handleChange");

const WelcomingForm = () => {
      return(
            <form onSubmit={handleSubmit}>
                  <label>
                        Prénom :
                        <input type="text" value={this.state.value} onChange={handleChange} />
                  </label>
                  <input type="submit" value="Envoyer" />
            </form>
      )
}

export default WelcomingForm;