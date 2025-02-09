class Header extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `

          <header>
<div style="background-color:#2d2d2d">
  <div class="container text-white">
    <div class="row">
      <div class="col-sm-4">
        <h2>Top of page</h2>
        <p>Scroll down to see sticky navbar.</p>
      </div>
    </div>
  </div>
</div>
          </header>
        `;
      }
    }


customElements.define('header-component', Header);