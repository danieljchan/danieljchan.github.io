class Footer extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
          <footer>
<div style="background-color:#2d2d2d">
  <div class="container text-white">
    <div class="row">
      <div class="col-sm-4">
        <h2>Footer</h2>
        <p>Test.</p>
      </div>
      <div class="col-sm-4">
        <h2>Hello</h2>
        <p>The Paris area is one of the largest population centers in Europe,
        ith more than 12 million inhabitants.</p>
      </div>
      <div class="col-sm-4">
        <h2>Yo</h2>
        <p>Tokyo.</p>
      </div>
    </div>
    </div>
</div>
          </footer>
        `;
      }
    }


customElements.define('footer-component', Footer);