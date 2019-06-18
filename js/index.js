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


// 5. resize


const footerPara = document.querySelector('footer p');

const heightOutput = document.createElement('span');
const widthOutput = document.createElement('span');


container.addEventListener('resize', function() {
    heightOutput.textContent = window.innerHeight;
    widthOutput.textContent = window.innerWidth;
});

console.log(heightOutput, widthOutput);

