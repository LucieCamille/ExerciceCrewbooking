/* --- Variables from DOM --- */
const btnWrapper = document.querySelector(".btn_wrapper");
const counter = document.querySelector(".counter");
const counterNbr = document.querySelector(".counter__nbr");

/* --- Variables --- */
let nbr = 0;
let counterInterval;
let btnStatus = "start";
const colorArray = ["DeepPink", "DarkTurquoise", "Gold", "PaleGreen", "Purple"];
let i = 0;


/* --- Functions --- */
// Dynamic rendering of Nbr & Start Btn
const render = () => {
  counterNbr.innerHTML = nbr;
  btnWrapper.innerHTML = `<button class="btn_wrapper__btn">${btnStatus}</button>`;
}
render()

/* --- Event --- */
// Global event listener on document
document.addEventListener('click', (e) => {
  e.preventDefault();
  if(e.target.classList.contains("btn_wrapper__btn") || e.target.classList.contains("btn_wrapper")) {
    // Event listener on click on Start Btn to start / stop the counter
      if(e.target.innerHTML === "start"){
        btnStatus = "stop";
        render();
        counterInterval = setInterval(counterIncrement, 1000)
      } else {
        btnStatus = "start";
        clearInterval(counterInterval);
        nbr = 0;
        render();
      }
  } 
  // Event listener on the counter box to change the color
  else if(e.target.classList.contains("counter") || e.target.classList.contains("counter__nbr")) {
    i < colorArray.length -1 ? i++ : i = 0
    counter.style.background = colorArray[i]
  }
  // Event listener on anything else that put the bg color back to white
  else {
    i = 0;
    counter.style.background = '#fff';
  }
})

// Function inside setInterval to increment the counter
const counterIncrement = () => {
  nbr ++;
  render()
}
