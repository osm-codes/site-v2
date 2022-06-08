import React from "react";

const Rodape = () => (
  <footer>
    <div className="col">
      <div className="brand">
        <svg>
          <use xlinkHref="#logosvg"></use>
        </svg>
      </div>
    </div>
    <div className="col">
      <ul className="nav" role="menu">
        <li>
          <a href="#!">Quem Somos</a>
        </li>
        <li>
          <a href="#!">Estatuto</a>
        </li>
        <li>
          <a href="#!">Projetos</a>
        </li>
        <li>
          <a href="#!">Parcerias</a>
        </li>
      </ul>
    </div>
    <div className="col">
      <ul className="nav" role="menu">
        <li>
          <a href="#!">Dado</a>
        </li>
        <li>
          <a href="#!">Serviços</a>
        </li>
        <li>
          <a href="#!">API</a>
        </li>
        <li>
          <a href="#!">Ferramentas</a>
        </li>
      </ul>
    </div>
    <div className="col">
      <h3 id="contactus">Contato</h3>
      <address itemScope itemType="http://schema.org/Organization">
        <ul
          itemProp="address"
          itemScope
          itemType="http://schema.org/PostalAddress"
        >
          <li className="hidden" itemProp="name">
            Instituto AddressForAll
          </li>
          <li itemProp="streetAddress">Av. Paulista, 171 4º andar</li>
          <li itemProp="addressLocality"> Bela Vista</li>
          <li itemProp="addressRegion"> São Paulo - SP</li>
          <li itemProp="postalCode"> 01311-904</li>
          <li itemProp="addressCountry"> Brasil</li>
        </ul>
      </address>
      <span itemProp="telephone">+55 11 4063-6401</span>
      <a href="mailto:contato@addressforall.org" itemProp="email">
        contato@addressforall.org
      </a>
    </div>
  </footer>
);

export default Rodape;
