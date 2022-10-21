/* --- Template HTML --- */
const template = document.createElement('template');
template.innerHTML = `
  <link rel="stylesheet" href="src/style.css">
  <div class="app">
    <div class="counter">
      <h2 class="counter__nbr"></h2>
    </div>
    <div class="btn_wrapper"><button class="btn_wrapper__btn"></button></div>
  </div>
`

/* --- Composant ---- */
class counterComponent extends HTMLElement {
  /* --- Variables --- */
  _nbr = 0 ;
  _btnStatus = "Start";
  _colorArray = ["DeepPink", "DarkTurquoise", "Gold", "PaleGreen", "Purple"];
  _i = 0;

  /* --- Data structure --- */
  constructor(){
    super();
    this.attachShadow({ mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this._app = this.shadowRoot.querySelector('.app');
    this._counter = this.shadowRoot.querySelector('.counter')
    this._counterNbr = this.shadowRoot.querySelector('.counter__nbr')
    this._btn = this.shadowRoot.querySelector('.btn_wrapper__btn');
    this.counterInterval = null
  }

  /* --- Methods when component attached to DOM --- */
  connectedCallback() {
    this.render()
    this._app.addEventListener('click', this.globalEventListeners)
  }

  /* --- Rendering of the variables --- */
  render() {
    this._counterNbr.innerText = this._nbr;
    this._btn.innerText = this._btnStatus; 
  }

  /* --- Global listener on app (each component root div) --- */
  globalEventListeners = (e) => {
    // Event listener on click on Start Btn to start / stop the counter
    if(e.target.classList.contains("btn_wrapper__btn") || e.target.classList.contains("btn_wrapper")) {
      this.changeCounter()
    }
    // Event listener on the counter box to change the color
    else if (e.target.classList.contains("counter") || e.target.classList.contains("counter__nbr")) {
      this.changeColor()
    }
    // Event listener on anything else that put the bg color back to white
    else {
      this._i = 0;
      this._counter.style.background = '#fff';
    }
  }

  // Function called in the global listerner to start / stop the counter increment
  changeCounter() {
    if(this._btn.innerText === "Start") {
      this.counterInterval = setInterval(this.incrementNbr.bind(this), 1000)
      this._btnStatus = "Stop"
      this.render()
    } else {
      this._nbr = 0;
      this._btnStatus = "Start"
      clearInterval(this.counterInterval)
      this.clearInterval = null
      this.render()
    }
  }

  // Function called inside the setInterval function to increment counter
  incrementNbr() {
    this._nbr ++
    this.render()
  }

  // Function called in the global listener to change the background color of counter
  changeColor(){
    this._i < this._colorArray.length -1 ? this._i++ : this._i = 0
    this._counter.style.background = this._colorArray[this._i]
  }

}

export default counterComponent;