import React from "react";
import "tachyons";

//Imported album covers
import adc from "../img/Album Covers/adc.jpeg";
import adc2 from "../img/Album Covers/adc2.jpeg";
import laDificil from "../img/Album Covers/la_dificil.jpeg";
import ponte from "../img/Album Covers/ponte.jpeg";
import sola from "../img/Album Covers/sola.jpeg";
//imported album covers

class Content extends React.Component {
  render() {
    return (
      <>
        <article>
          <h2 className="f3 fw4 pa3 mv0">Albums</h2>
          <div className="cf pa2">
            <div className="fl w-50 w-25-m w-20-l pa2">
              <a
                href="https://geo.itunes.apple.com/us/album/blonde/id1146195596?at=1l3vqFJ&mt=1&app=music"
                className="db link dim tc"
              >
                <img
                  src={adc}
                  alt="Jay la Melodia - Cover Cancion"
                  className="w-100 db outline black-10"
                />
                <dl class="mt2 f6 lh-copy">
                  <dt className="clip">Titulo</dt>
                  <dd className="ml0 black truncate w-100">ADC</dd>
                  <dt className="clip">Artista</dt>
                  <dd className="ml0 gray truncate w-100">Jay La Melodia</dd>
                </dl>
              </a>
            </div>
            <div className="fl w-50 w-25-m w-20-l pa2">
              <a
                href="https://geo.itunes.apple.com/us/album/jeffery/id1146718343?at=1l3vqFJ&mt=1&app=music"
                className="db link dim tc"
              >
                <img
                  src={adc2}
                  alt="Jay la Melodia - Cover Cancion"
                  className="w-100 db outline black-10"
                />
                <dl class="mt2 f6 lh-copy">
                  <dt className="clip">Title</dt>
                  <dd className="ml0 black truncate w-100 ttu">ADC2</dd>
                  <dt className="clip">Artista</dt>
                  <dd className="ml0 gray truncate w-100">Jay la Melodia</dd>
                </dl>
              </a>
            </div>
            <div className="fl w-50 w-25-m w-20-l pa2">
              <a
                href="https://geo.itunes.apple.com/us/album/untitled-unmastered./id1089846273?at=1l3vqFJ&mt=1&app=music"
                className="db link dim tc"
              >
                <img
                  src={laDificil}
                  alt="Jay la Melodia - Cover Cancion"
                  className="w-100 db outline black-10"
                />
                <dl className="mt2 f6 lh-copy">
                  <dt className="clip">Titulo</dt>
                  <dd className="ml0 black truncate w-100">La Dificil</dd>
                  <dt className="clip">Artista</dt>
                  <dd className="ml0 gray truncate w-100">Jay la Melodia</dd>
                </dl>
              </a>
            </div>
            <div className="fl w-50 w-25-m w-20-l pa2">
              <a
                href="https://geo.itunes.apple.com/us/album/99.9/id1092026376?at=1l3vqFJ&mt=1&app=music"
                className="db link dim tc"
              >
                <img
                  src={ponte}
                  alt="Jay la Melodia - Cover Cancion"
                  className="w-100 db outline black-10"
                />
                <dl className="mt2 f6 lh-copy">
                  <dt className="clip">Titulo</dt>
                  <dd className="ml0 black truncate w-100">Ponte!</dd>
                  <dt className="clip">Artista</dt>
                  <dd className="ml0 gray truncate w-100">Jay la Melodia</dd>
                </dl>
              </a>
            </div>
            <div className="center w-50 w-25-m w-20-l pa2">
              <a
                href="https://geo.itunes.apple.com/us/album/aa/id1067924003?at=1l3vqFJ&mt=1&app=music"
                className="db link dim tc"
              >
                <img
                  src={sola}
                  alt="Jay la Melodia - Cover Cancion"
                  className="w-100 db outline black-10"
                />
                <dl className="mt2 f6 lh-copy">
                  <dt className="clip">Titulo</dt>
                  <dd className="ml0 black truncate w-100">Sola</dd>
                  <dt className="clip">Artista</dt>
                  <dd className="ml0 gray truncate w-100">Jay la Melodia</dd>
                </dl>
              </a>
            </div>
          </div>
        </article>
      </>
    );
  }
}

export default Content;
