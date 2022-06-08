import React from "react";

const Header = (props) => (
  <header>
    <div className="brand">
      <a href="/">
        <svg>
          <use xlinkHref="#logosvg"></use>
        </svg>
      </a>
    </div>

    <nav>
      <ul className="nav">
        <li className="dropdown">
          <span className="dropdown-toggle" href="!#" role="button">
            Quem Somos
          </span>
          <ul className="dropdown-menu">
            <li>
              <a href="/about">Quem Somos</a>
            </li>
            <li>
              <a href="!#">Estatuto</a>
            </li>
            <li>
              <a href="!#">Projetos</a>
            </li>
            <li>
              <a href="!#">Parcerias</a>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <span className="dropdown-toggle" href="!#" role="button">
            Dado
          </span>
          <ul className="dropdown-menu">
            <li>
              <a href="!#">Serviços</a>
            </li>
            <li>
              <a href="!#">API</a>
            </li>
            <li>
              <a href="!#">Ferramentas</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="!#">FAQ</a>
        </li>
        <li>
          <a href="#contactus">Contato</a>
        </li>
        <li>
          <a href="!#">Blog</a>
        </li>
      </ul>
    </nav>
    <div className="icons-menu">
      <ul className="nav">
        <li>
          <a href="#!">
            <svg>
              <use xlinkHref="#git"></use>
            </svg>
          </a>
        </li>
        <li>
          <a href="#!">
            <svg>
              <use xlinkHref="#dadosAbertos"></use>
            </svg>
          </a>
        </li>
      </ul>
      <form>
        <select className="form-select" aria-label="Language">
          <option defaultValue="pt">pt</option>
          <option value="es">sp</option>
          <option value="en">en</option>
        </select>
      </form>
    </div>
  </header>
);

export default Header;
