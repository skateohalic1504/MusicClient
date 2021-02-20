import React from "react";
import "tachyons";
import { Card } from "react-bootstrap";

import "./Bio.css";

//imagenes importadas
import jay1 from "../img/jay1.JPG";

class Bio extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <article className="mw6 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
            <div className="tc">
              <img
                src={jay1}
                alt="Foto de Jay"
                className="br-100 h4 w4 dib ba b--black-05 pa2"
                title="Jay la Melodia"
              />
              <h1 className="f3 mb2">Jay La Melodia</h1>
              <h2 className="f5 fw4 gray mt0">Composito y Cantante</h2>
            </div>
            <Card body>
              <p>
                Mi nombre es Juan Alberto Rosario, soy de República Dominicana,
                nací un 3 de julio de 1999, tengo 2 hermanos y yo soy el menor.
                Crecer en el ámbito artístico no sera facil, pero no hay nada
                imposible para el que cree. Espero que disfruten de mis
                canciones y les agradezco su amor hacía mi persona y a lo que
                hago. #LaMelodía❤️
              </p>
            </Card>
          </article>
        </div>
      </>
    );
  }
}

export default Bio;
