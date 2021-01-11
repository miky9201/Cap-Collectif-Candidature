import React from 'react';

const Div1 = ({title}) => {
      
      return(
            <div id="div1" className="section-1 animate__animated animate__bounceInRight">
                  <h1>{title}</h1>
                  <div className="motivation-text card-style">
                        <p>Cher(s) recruteur(s),</p>

                        <p>En lisant votre annonce j’ai été frappé par la nature de votre mission. Depuis toujours j’ai l’impression de vivre et d’évoluer dans une démocratie théorique plus que réelle. Nous élisons des personnes qui nous représentent mais ce système, bien qu’il possède des avantages, est très imparfait et nous pouvons l’expérimenter au quotidien et ce depuis des décennies. À travers votre existence et votre activité, vous redonnez du sens à la démocratie en permettant, à votre échelle, de donner du pouvoir directement aux citoyens.</p>

                        <p>D’un point de vue métier, mon parcours est quelque peu atypique : au départ destiné à une carrière de Community et Social Media manager, j’ai découvert en autodidacte et à travers une expérience freelance, le développement web et ai développé une véritable passion pour ce métier. J’ai donc décidé de réaliser une reconversion professionnelle pour devenir développeur frontend. Ce qui me plait le plus dans ce métier c’est qu’il met au quotidien ma résilience au travail. Il n y a pas un jour identique et où l’on ne doit pas chercher une information, régler un bug, tester, essayer et recommencer jusqu’à ce que ça marche. C’est extrêmement stimulant intellectuellement et c’est ce qui me plait énormément dans le développement. Actuellement en fin de formation, je maitrise les fondamentaux du développement frontend et je suis en train de réaliser une application en React utilisant l’api Google maps (disponible sur mon profil github sous le nom de “projet7”)</p>

                        <p>Pour résumer, faire le travail que j’aime le plus au sein d’une entreprise dont la mission a un véritable sens civique serait un honneur pour moi. En espérant sincèrement un retour de votre part, je vous souhaite une très bonne journée !</p>

                        <p>Cordialement,</p>
                        <p>Mike Baldacci</p>
                  </div>
            </div>
      )
}

export default Div1;