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
    <img src="./images/bp_logo.png" style="padding-right: 10px;">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto pull-right">
        <li class="nav-item active">
          <a class="nav-link" href="index.html">Home</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="A000.html">Pricing</a>
        </li>
        <li class="nav-item active dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Classes
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="B000.html">Intro to Bouldering</a>
            <a class="dropdown-item" href="C000.html">Kids Team</a>
          </div>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="A000.html">Shop</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="A000.html">Waiver</a>
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