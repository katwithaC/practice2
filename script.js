document.querySelector('h1').onclick = function() {
    alert('You just clicked the heading!');
}

document.querySelector('ul').onclick = function() {
    alert('You just clicked things that i like!');
}

let myIMG = document.querySelector('img');
myIMG.onclick = function() {
    alert('Ha ha you just clicked the image!');
};

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === "assets/margarita.jpg") {
      myImage.setAttribute('src',"assets/blackswan.jpg");
    } else {
      myImage.setAttribute('src','assets/margarita.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Welcome to the page, ' + myName;
  }
}

myButton.onclick = function() {
  setUserName();
}