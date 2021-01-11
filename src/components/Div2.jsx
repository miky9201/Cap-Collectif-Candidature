import React from 'react';
import moi from'../images/moi.jpg';
import experience from './experience.json';
import coord from './coord.json';

const Div2 = ({title}) => {

      return(
            <div id="div2" className="section-2 flex-col-space-between-center animate__animated animate__bounceInRight">
                  <div className="overflow flex-col-start-center"> 
                        <h1>{coord.firstName} {coord.lastName}</h1>
                        <img src={moi} width="100px"  alt="profil" />
                        <h2>Projets</h2>
                        {experience.projets.map((item) => {
                              return(
                                    <div className="flex-row-start-start card">
                                          <a href={item.lien}><img className="card-img" src={item.image} alt={item.titre}/></a>
                                          <div className="card-text">
                                                <h3>{item.titre}</h3>
                                                <h4>{item.technos}</h4>
                                                <p>{item.descriptif}</p>
                                          </div>                                
                                    </div>
                        )})}
                        <h2>Hobbies</h2>
                        {experience.hobbies.map((item) => {
                              return(
                                    <div className="flex-row-start-start card">
                                          <img className="card-img" src={item.image} alt={item.titre}/>    
                                          <div className="card-text">
                                                <h3>{item.titre}</h3>
                                                <p>{item.descriptif}</p>
                                          </div>
                                    </div>
                              )
                        })}
                        <h2>Formation</h2>
                        {experience.formation.map((item) => {
                              return(
                                    <div className="flex-row-start-start card">
                                          <img className="card-img" src={item.image} alt={item.titre}/>
                                          <div className="card-text">
                                                <h3>{item.titre}</h3>
                                                <h4>{item.ecole}, {item.date} ({item.duree})</h4>
                                                <p>{item.descriptif}</p>
                                          </div>
                                    </div>
                              )
                        })}
                  </div>      
            </div>
      )
}

export default Div2;