// BASIC SYNTAX
// Selectors: 
// let elementName = document.querySelector("#elementId")
// Functions
// function functionName() {
  // do something here
 
// }
// Call the event with an event listener
// elementName.addEventListener("onclick", functionName);

// 1. DISPLAY NAME
// Click the button to display your name in the box
// (Tip: in this example, you will hard code your name within the JavaScript function, rather than use the input box to grab it).

// Selectors
let myButtName = document.getElementById("btnName");
let myName = document.getElementById("myName");

// Function
function showName() {
  let msg = 'Da Boiz Bloody CODE';
  myName.value = msg;
  
}


// Call the event
myButtName.addEventListener('click', showName);


// 2. LIGHTSWITCH
// Switch lights on mouseover
// When the mouse cursor is on the lightbulb image, the lighton image should show; and revert back to the lightoff image when the mouse moves off.

// Selectors
let imgOff = document.getElementById("imageOff");


// Function
function toggleLightOff() {
  imageOff.src = "./images/lighton.png"
}

function toggleLightOn() {
  imageOff.src = "./images/lightoff.png"
}
// Call the event
imageOff.addEventListener('mouseover', toggleLightOff)
imageOff.addEventListener('mouseout', toggleLightOn)


// 3. Double click button to display content
// Selectors
let btndbName = document.getElementById("btndbName")
let displayPara = document.getElementById("displayPara")

//Function 
function showPara() {
  displayPara.innerHTML = "You double clicked me";
  displayPara.style.color = "red";
  let smileyImg = document.createElement("img");
  smileyImg.src = "./images/smileyface.png";
  displayPara.appendChild(smileyImg);

}
  


// Call the event
btndbName.ondblclick = showPara;


// 4. Traffic Lights
// Selectors
let btnStop = document.getElementById('btnStop');
let btnReady = document.getElementById('btnReady');
let btnGo = document.getElementById('btnGo');
let stopDiv = document.getElementById('stopDiv');
let readyDiv = document.getElementById('readyDiv');
let g0Div = document.getElementById('goDiv');

// Function 1
function stopp(){
  stopDiv.style.backgroundColor = 'red';
  readyDiv.style.backgroundColor = '';
  goDiv.style.backgroundColor= '';
}


// Function 2
function readyy(){
  stopDiv.style.backgroundColor = '';
  readyDiv.style.backgroundColor = 'orange';
  goDiv.style.backgroundColor= '';
}


// Function 3
function goo(){
  stopDiv.style.backgroundColor = '';
  readyDiv.style.backgroundColor = '';
  goDiv.style.backgroundColor= 'green';
}


// Call the events
btnStop.addEventListener('click', stopp);
btnReady.addEventListener('click', readyy);
btnGo.addEventListener('click', goo);

// 5. Change textbox border colours
// Selectors
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let btn2Name = document.getElementById("btn2Name")

// Function
function changeBorder() {
  firstName.style.borderColor = "purple";
  lastName.style.borderColor = "green";
}


// Call the event
btn2Name.onclick = changeBorder;


// 6. Validate the input [length should be more than 5 characters]
// Selectors
let myName2 = document.getElementById("myName2");
let btnSub2 = document.getElementById("btnSub2");
let errMsg = document.getElementById("errMsg");
//Function {
  //if statement
function verifyInput () {
  if (myName2.value == "" || myName2.value.length < 8) {
    errMsg.innerHTML = "Please type more than 8 characters!";
    errMsg.style.color = "red";
  } else {
    errMsg.innerHTML = "I am Groot, that is goot";
  }
}

// Call the event
btnSub2.onclick = verifyInput;


// 7.create a list of hobbies
// Selectors
let btnHobbies = document.getElementById("btnHobbies");
let hobbiesList = document.getElementById("hobbies > ul");

//Function {
function hobbiesPrompt () {
  for (i=0; i<3; i++) {
    document.createElement("li");
    window.prompt("CLICK HERE TO CLEAN YOUR DESKTOP");
  }
}


 
//}

// Call the event
btnHobbies.onclick = hobbiesPrompt;


// 8. Display a profile card from an object
//Object

// Selectors

/*Function {
    //for loop
      //if statement
  }*/
