class Navbar extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
          <navbar>
<div class="sticky-top" style="background-color:white">
<div class="container">

  <nav class="navbar navbar-expand-lg navbar-light">
    <img src="./images/bp_logo.png">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto pull-right">
        <li class="nav-item">
          <a class="nav-link" href="index.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="A000.html">Pricing</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Classes
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="B000.html">Intro</a>
            <a class="dropdown-item" href="C000.html">Kids Team</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
  </div>
  </div>
          </navbar>
        `;
      }
    }


customElements.define('navbar-component', Navbar);