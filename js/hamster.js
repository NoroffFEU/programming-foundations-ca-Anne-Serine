const hamster = {
  name: "Trippel X Baltazar",
  type: "Dwarf hamster",
  gender: "Male",
  colors: ["grey", "white", "brown"],
  numberOfLegs: 3,
  yearOfBirth: 2022,
  favoriteFood: ["apple", "grapes", "cucumber", "melon"],
  respondsWhenYouWhistle: true,
  eat: function () {
    console.log(
      "Stuffs as much food as he can in his mouth, so that he gets chubby cheeks"
    );
  },
  sleep: function () {
    console.log("Resting to be ready for an active night");
  },
  awake: function () {
    console.log(
      "Tripple X Baltazar runs in his exercise wheel, grooming and playing around"
    );
  },
  whistle: function () {
    console.log(
      "Tripple X Baltazar looks out the door of his wooden house, and comes out to say hi"
    );
  },
};

var heading = document.querySelector("h1");
var subHeading = document.querySelector("h2");
var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");
var button4 = document.querySelector("#button4");
var output = document.querySelector("#output");


heading.innerHTML = ("Trippel X Baltazar");
subHeading.innerHTML = ("- the dwarf hamster -");
button1.innerHTML = "Eat";
button2.innerHTML = "Sleep";
button3.innerHTML = "Awake";
button4.innerHTML = "Whistle";


function eat() {
  output.innerHTML = "Stuffs as much food as he can in his mouth, so that he gets chubby cheeks";
}

button1.onclick = eat;


function sleep() {
  output.innerHTML = "Resting to be ready for an active night";
}

button2.onclick = sleep;


function awake() {
  output.innerHTML = "Tripple X Baltazar runs in his exercise wheel, grooming and playing around";
}

button3.onclick = awake;


function whistle() {
  output.innerHTML = "Tripple X Baltazar looks out the door of his wooden house, and comes out to say hi"
}

button4.onclick = whistle;


