import React from "react";
import Content from "../components/layout";
import RegionalMap from "../assets/img/regioes_atendidas.svg";
const Home = () => (
  <>
    <Content>
      <section id="advertisment">
        <p className="message">
          O site da base de dados de endereços aberta, colaborativa{" "}
          <span className="underlined">gratuita</span>
        </p>
        <div className="youtube-video-container">
          <iframe
            src="https://www.youtube.com/embed/6sT6Xm8jwCI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section id="regionalmap">
        <p className="message">
          Regiões onde atuamos, buscando endereços no dominio público com
          equipes voluntárias e <span className="underlined">remuneradas</span>
        </p>
        <img alt="regional map" src={RegionalMap} />
      </section>

      <section id="aboutus">
        <p className="message">
          O Instituto AddressForAll é uma ONG, sem fim lucrativo, que mantém uma
          base de endereços aberta, colaborativa e gratuita. Remuneramos equipes
          que fazem um trabalho proativo de busca de dados, nos países onde
          atuamos.
        </p>
        <a href="!#" className="btn btn-blue">
          Quem somos
        </a>
      </section>

      <section id="statutes">
        <div className="col">
          <p className="message">
            Os nossos dados são disponiveis para download, com a informação do
            tipo de licensa aberta para cada dado (CC0, CC BY ou CC BY AS, ou
            equivalente)
          </p>
          <a href="!#" className="btn btn-blue">
            Downloads
          </a>
        </div>
      </section>
    </Content>
  </>
);

export default Home;
