import React from "react";
import Content from "../components/layout";
// import GenericPerson from "../assets/img/Generic-person.png";

import Thierry from "../assets/img/staff-photos/thierry.png";
import Filipe from "../assets/img/staff-photos/filipe.png";
import Peter from "../assets/img/staff-photos/peter.png";
import Silvana from "../assets/img/staff-photos/silvana.png";
import Gabriel from "../assets/img/staff-photos/gabriel.png";
import Batista from "../assets/img/staff-photos/batista.png";
import Carlos from "../assets/img/staff-photos/carlos.png";
import Clodoveu from "../assets/img/staff-photos/clodoveu.png";
import Eduardo from "../assets/img/staff-photos/eduardo.png";
import Jerome from "../assets/img/staff-photos/jerome.png";
import Junior from "../assets/img/staff-photos/junior.png";
import Luis from "../assets/img/staff-photos/luis.png";
import LuisF from "../assets/img/staff-photos/luisf.png";
import Rafael from "../assets/img/staff-photos/rafael.png";
import Roberto from "../assets/img/staff-photos/roberto.png";
import Karla from "../assets/img/staff-photos/karla.png";


const About = () => (
  <>
    <Content>
      <section className="lead-text">
        <h1>Quem Somos?</h1>
        <p>
          O instituto de Tecnologia Geo-Sociais AddressForAll tem por objetivo a
          defesa dos dados abertos e da melhoria social através do bom uso da
          tecnologia com ênfase nas tecnologias geo-espaciais.
        </p>
      </section>
      <section className="lead-text align-right">
        <h2>Histórico</h2>
        <p>
          Como parte do seu trabalho no apoio do projeto de mapa colaborativo
          OpenStreetMap, durante 3 anos, os fundadores do Instituto tentaram
          motivar o governo Brasileiro a criar uma base de dados de endereços
          aberta e colaborativa no Brasil. Vendo que o projeto não passava da
          ideação, devido à falta de vontade ou força política, Thierry Jean,
          Filipe Rocha e Peter Krauss decidiram lançar o projeto "Endereço para
          todos" em 2020 no âmbito de uma associação sem fins lucrativos chamada
          "Instituto de Tecnologias Geo-Sociais AddressForAll".
        </p>
      </section>
      <section id="founders">
        <h2>Fundadores</h2>
        <ul className="staff founders">
          <li>
            <img alt="Thierry Jean" src={Thierry} />
            <p>Thierry Jean</p>
          </li>
          <li>
            <img alt="Filipe Rocha" src={Filipe} />
            <p>Filipe Rocha</p>
          </li>
          <li>
            <img alt="Peter Krauss" src={Peter} />
            <p>Peter Krauss</p>
          </li>
        </ul>
      </section>

      <section id="consultants">
        <h2>Conselho Consultivo</h2>
        <ul className="staff consultants">
          <li>
            <img alt="Silvana Camboin" src={Silvana} />
            <p>Silvana Camboin</p>
          </li>
          <li>
            <img alt="Rafael Sequeira" src={Rafael} />
            <p>Rafael Sequeira</p>
          </li>
          <li>
            <img alt="Luis Ugeda" src={Luis} />
            <p>Luis Ugeda</p>
          </li>
          <li>
            <img alt="Eduardo Francisco" src={Eduardo} />
            <p>Eduardo Francisco</p>
          </li>

          <li>
            <img alt="Clodoveu Davis" src={Clodoveu} />
            <p>Clodoveu Davis</p>
          </li>
          <li>
            <img alt="Karla Borges" src={Karla} />
            <p>Karla Borges</p>
          </li>
          <li>
            <img alt="Jérôme Desboeufs" src={Jerome} />
            <p>Jérôme Desboeufs</p>
          </li>
          <li>
            <img alt="Roberto Olinto" src={Roberto} />
            <p>Roberto Olinto</p>
          </li>
        </ul>
      </section>

      <section id="itcrowd">
        <h2>Equipe Técnica-Operacional</h2>
        <ul className="staff itcrowd">
          <li>
            <img alt="Batista Echevarría" src={Batista} />
            <p>Batista Echevarría</p>
          </li>
          <li>
            <img alt="Carlos Rebollo" src={Carlos} />
            <p>Carlos Rebollo</p>
          </li>
          <li>
            <img alt="Junior Manoel" src={Junior} />
            <p>Junior Manoel</p>
          </li>
          <li>
            <img alt="Luis Felipe" src={LuisF} />
            <p>Luis Felipe&nbsp;</p>
          </li>

          <li>
            <img alt="Gabriel Machado" src={Gabriel} />
            <p>Gabriel Machado</p>
          </li>
        </ul>
      </section>

      <section id="statutes">
        <div className="col">
          <p className="message">
            No link ababixo você pode consultar uma versão resumida de nosso
            estatuto social, bem como acessar as diversas versões de nosso
            estatutato em inteiro teor
          </p>
          <a href="!#" className="btn btn-blue">
            Estatuto
          </a>
        </div>
      </section>
    </Content>
  </>
);

export default About;
