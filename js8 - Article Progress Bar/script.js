const container = document.getElementById('js-container');
const highlight = document.getElementById('js-highlight');
let containerHeight;

window.onscroll = function() {

  containerHeight = container.offsetHeight - window.innerHeight;
  let containerPos = container.getBoundingClientRect();
  let diff = containerHeight + containerPos.top;
  let progressPercentage = diff / containerHeight * 100;
  let cssWidth = Math.floor(100 - progressPercentage);

  highlight.style.width = cssWidth + "%";
}