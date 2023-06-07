const hamster = {
  name: "Trippel X Baltazar",
  type: "Dwarf hamster",
  gender: "Male",
  colors: ["grey", "white", "brown"],
  numberOfLegs: 3,
  yearOfBirth: 2022,
  favoriteFood: ["apple", "grapes", "cucumber", "melon"],
  respondsWhenYouWhistle: true,
  eat: {
    imgUrl: "/images/hamster-hamster-eating.gif",
    eatText: function () {
      return "- Tripple X stuffs as much food as he can in his mouth, so that he gets chubby cheeks -";
    },
  },
  sleep: {
    imgUrl: "/images/hamster_sleeping.png",
    sleepText: function () {
      return "- Tripple X is resting to be ready for an active night -";
    },
  },
  awake: {
    imgUrl: "/images/hamster_playing.png",
    awakeText: function () {
      return "- Tripple X is playing around, grooming and running in his exercise wheel -";
    },
  },
  whistle: {
    imgUrl: "/images/hamster_says_hi.png",
    whistleText: function () {
      return "- Tripple X looks out the door of his wooden house, and comes out to say hi -";
    },
  },
};

var heading = document.querySelector("h1");
var subHeading = document.querySelector("h2");
var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");
var button4 = document.querySelector("#button4");
var output = document.querySelector("#output");

heading.innerHTML = hamster.name;
subHeading.innerHTML = "- the dwarf hamster -";
button1.innerHTML = "Eat";
button2.innerHTML = "Sleep";
button3.innerHTML = "Awake";
button4.innerHTML = "Whistle";

function eat() {
  output.innerHTML = hamster.eat.eatText();
  output.innerHTML += '<img class="hamster-pic hamster-eat-pic" src="' + hamster.eat.imgUrl + '">';
}

button1.onclick = eat;

function sleep() {
  output.innerHTML = hamster.sleep.sleepText();
  output.innerHTML += '<img class="hamster-pic" src="' + hamster.sleep.imgUrl + '">';
}

button2.onclick = sleep;

function awake() {
  output.innerHTML = hamster.awake.awakeText();
  output.innerHTML += '<img class="hamster-pic" src="' + hamster.awake.imgUrl + '">';
}

button3.onclick = awake;

function whistle() {
  output.innerHTML = hamster.whistle.whistleText();
  output.innerHTML += '<img class="hamster-pic" src="' + hamster.whistle.imgUrl + '">';
}

button4.onclick = whistle;
