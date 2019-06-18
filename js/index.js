// Your code goes here
/* 
10 unique event listeners
 mouseover
 keydown
 wheel
 drag / drop
 load
 focus
 resize
 scroll
 select
 dblclick
 */


 // 1. mouseover - on nav change color
const logoHeader = document.querySelector('.logo-heading');

logoHeader.addEventListener('mouseover', function(event){
    event.target.style.cursor = "pointer";
    event.target.style.color = "orange";
});

logoHeader.addEventListener('mouseleave', function(event){
    event.target.style.color = "black";
});


// 2. keydown
const container = document.querySelector('body');
container.addEventListener('keydown', () => alert(`You pressed keyboard!`));


// 3. wheel
const headerBar = document.querySelector('header')
container.addEventListener('wheel', () => headerBar.style.backgroundColor = "#FFEBCD");


// 4. drag / drop
const draggableBox = document.querySelector('#draggable');
draggableBox.style.border = "2px black solid";
draggableBox.style.width = "100px";
draggableBox.style.height = "50px";
draggableBox.style.padding = "10px";
draggableBox.style.fontsize = "18px";

const dropBox = document.querySelector('#droppable');
dropBox.style.backgroundColor = "black";
dropBox.style.color = "white";
dropBox.style.width = "100px";
dropBox.style.height = "50px";
dropBox.style.padding = "10px";
dropBox.style.fontsize = "18px";
dropBox.style.marginBottom = "50px";

var dragged;
document.addEventListener("drag", function(event) {}, false);

document.addEventListener("dragstart", function(event) {
  dragged = event.target;
  event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function(event) {
  event.target.style.opacity = "";
}, false);

document.addEventListener("dragover", function(event) {
  event.preventDefault();
}, false);

document.addEventListener("dragenter", function(event) {
  if (event.target.className == "dropzone") {
    event.target.style.background = "#17A2B8";
  }
}, false);

document.addEventListener("dragleave", function(event) {
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
  }
}, false);

document.addEventListener("drop", function(event) {
  event.preventDefault();
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
    dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
  }
}, false);


// 5. load
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
});


// 6. resize
const sizeTell = document.createElement("p");
const sizeTeller = document.createElement("p");

sizeTell.textContent = "A number of re-sizing window :"
window.addEventListener("resize", myFunction);

var x = 0;
function myFunction() {
    footer.appendChild(sizeTell)

    var txt = x += 1;
    sizeTeller.textContent = txt;
    return footer.appendChild(sizeTeller);
}


// 7. scroll
window.addEventListener('scroll', () => console.log('Web page is scrolled'));


// 8. dbclick
const workBtn = document.querySelector('.btn');
workBtn.addEventListener('dblclick', function(eventObject){
    console.log(`button is on fire!`);
    workBtn.style.backgroundColor = "navy";
});

const allBtn = document.querySelectorAll('.btn');
const thirdBtn = allBtn[2];
thirdBtn.addEventListener('dblclick', () => thirdBtn.style.backgroundColor = "pink");


// 9. focus
const form = document.getElementById('search_input');
form.style.padding = "10px 10px";
form.style.fontSize = "18px"

form.addEventListener('focus', (event) => {
    event.target.style.background = 'gray';    
});


// 10. select
const welcome = document.querySelector(".intro h2");
form.addEventListener("select", () => form.style.color = "white");

