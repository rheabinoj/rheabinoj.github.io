
window.addEventListener("load", () =>{
  document.querySelector(".main").classList.remove("hidden");
  document.querySelector(".home-section").classList.add("active");

  document.querySelector(".page-loader").classList.add("fade-out");
  setTimeout(() =>{
    document.querySelector(".page-loader").style.display = "none";
  },600);

});

const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () =>{
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");

});
function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
}

document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("link-item") && e.target.hash !== ""){
        document.querySelector(".overlay").classList.add("active");
        navToggler.classList.add("hide");
        
         if(e.target.classList.contains("nav-item")){
           toggleNavbar();
        }
        else{
            hideSection();
            document.body.classList.add("hide-scrolling");
        }
        setTimeout(() =>{
            document.querySelector("section.active").classList.remove("active", "fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide");
            document.querySelector(".overlay").classList.remove("active");
        },500);
    
    }

});
const cursor = document.querySelector(".cursor");
    var timeout;

    //follow cursor on mousemove
    document.addEventListener("mousemove", (e) => {
      let x = e.pageX;
      let y = e.pageY;

      cursor.style.top = y + "px";
      cursor.style.left = x + "px";
      cursor.style.display = "block";

      //cursor effects when mouse stopped
      function mouseStopped(){
        cursor.style.display = "none";
      }
      clearTimeout(timeout);
      timeout = setTimeout(mouseStopped, 5000);  
    });

    //cursor effects when mouseout
    document.addEventListener("mouseout", () => {
      cursor.style.display = "none";
    });

var textWrapper = document.querySelector('.ml7 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml7 .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml7',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  

  anime.timeline({loop: true})
  .add({
    targets: '.ml1 .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i+1)
  }).add({
    targets: '.ml1 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i)
  }).add({
    targets: '.ml1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  var textWrapper = document.querySelector('.ml16');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml16 .letter',
    translateY: [-100,0],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 30 * i
  }).add({
    targets: '.ml16',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  anime.timeline({loop: true})
  .add({
    targets: '.ml15 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.ml15',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  var textWrapper = document.querySelector('.ml10 .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
  anime.timeline({loop: true})
    .add({
      targets: '.ml10 .letter',
      rotateY: [-90, 0],
      duration: 1300,
      delay: (el, i) => 45 * i
    }).add({
      targets: '.ml10',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });

let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
 email =  id("email"),
password = id("password"),
form = id("form"),
errorMsg = classes("error"),
successIcon = classes("success-icon"),
failureIcon = classes("failure-icon");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    
engine(username, 0, "Username cannot be blank");
engine(email, 1, "Email cannot be blank");
engine(password, 2, "Password cannot be blank");
  
});


let engine = (id, serial, message) =>{
    if(id.value.trim() === ''){
        errorMsg[serial].innerHTML = message;
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    }
    else{
        errorMsg[serial].innerHTML = '';
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
    }
};

let computerguess;
let buttonrock;
let buttonscissors;
let buttonpaper;
let score = 0;

function setup() {
  createCanvas(400, 400);
  drawButtons();
}

function draw() {
  //just keep running
  textSize(12);
  text('Add a point when you win, and Subtract when you loose with the buttons!', 0,190);
  textSize(15);
  text('Score: '+score, 120,230);

}

function rock() {
  drawButtons();
  computerguess = random(['rock', 'paper', 'scissors']);
  text('you chose rock', 50, 300);
  text('computer chose ' + computerguess, 200, 300);
  if(computerguess == 'rock'){
    text("It's a tie",100,350);
  } else if (computerguess == 'scissors'){
    text("You win!", 100,350);
  } else {
    text("You lose :(", 100,350);
  }
}

function paper() {
  drawButtons();
  computerguess = random(['rock', 'paper', 'scissors']);
  text('you chose paper', 50, 300);
  text('computer chose ' + computerguess, 200, 300);
  if(computerguess == 'paper'){
    text("It's a tie",100,350);
  } else if (computerguess == 'scissors'){
    text("You lose:(", 100,350);
  } else {
    text("You win! ", 100,350);
  }
}

function scissors() {
  drawButtons();
  computerguess = random(['rock', 'paper', 'scissors']);
  text('you chose scissors', 50, 300);
  text('computer chose ' + computerguess, 200, 300);
  if(computerguess == 'scissors'){
    text("It's a tie",100,350);
  } else if (computerguess == 'rock'){
    text("You win!", 100,350);
  } else {
    text("You lose :(", 100,350);
  }
}


function addPoints(){
  background(220);
  if (score >= 0)
    score+=1;
}

function minusPoints(){
  background(220);
  if(score>= 0)
    score-=1;
}

function drawButtons() {
  background(220);
 
  buttonadd =
  createButton('AddPoint');
  buttonadd.position(200,200);
  buttonadd.mousePressed(addPoints);
 
  buttonmin =
  createButton('MinusPoint');
  buttonmin.position(200,230);
  buttonmin.mousePressed(minusPoints);

  buttonrock = createButton('Rock');
  buttonrock.position(150, 50);
  buttonrock.mousePressed(rock);

  buttonpaper = createButton('Paper');
  buttonpaper.position(150, 100);
  buttonpaper.mousePressed(paper);

  buttonscissors = createButton('Scissors');
  buttonscissors.position(150, 150);
  buttonscissors.mousePressed(scissors);

  text("Rock, paper, scissors!", 20, 20);
}
//pacman
i = 1.85 
x = 0.2 
speed = 0.01 

function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(0);
  
  //Pacman body
  fill(255, 255, 0);
  ellipse(200, 200, 200, 200);
  
  //Pacman mouth
  fill(0);
  if (i >= 2 || i <= 1.8) {
    speed = speed*(-1) 
  }
  arc(200, 200, 200, 200, 
      (i+=speed)*PI, (x-=speed)*PI, PIE);
  
  //Pacman eye
  ellipse(200, 150, 15, 15);

}

let slider;

function setup() {
  createCanvas(400, 400);
  slider = createSlider(0, 10, 2, 0.01);
}

function draw() {
  background(51);
  translate(width / 2, height / 2);

  let a = 100;
  let b = 100;
  let n = slider.value();
  stroke(255);
  noFill();

  beginShape();
  for (let angle = 0; angle < TWO_PI; angle += 0.1) {

    // Superellipse
    let na = 2 / n;
    let x = pow(abs(cos(angle)), na) * a * sgn(cos(angle));
    let y = pow(abs(sin(angle)), na) * b * sgn(sin(angle));
    vertex(x, y);
  }
  endShape(CLOSE);
}

function sgn(val) {
  if (val == 0) {
    return 0;
  }
  return val / abs(val);
}