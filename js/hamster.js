const hamster = {
  name: "Tripple X Baltazar",
  type: "dwarf hamster",
  gender: "male",
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
  cageInventory: [
    {
      item: "water bottle",
      color: "clear",
      quantity: 1,
      material: "plastic",
    },
    {
      item: "exercise wheel",
      color: "clear",
      quantity: 1,
      material: "plastic",
    },
    {
      item: "house",
      color: "brown",
      quantity: 1,
      material: "wood",
    },
    {
      item: "food bowl",
      color: "grey",
      quantity: 1,
      material: "ceramic",
    },
    {
      item: "sand bath",
      color: "red",
      quantity: 1,
      material: "plastic",
    },
  ],
};

var heading = document.querySelector("h1");
var subHeading = document.querySelector("h2");
var info = document.querySelector("#info");
var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");
var button4 = document.querySelector("#button4");
var output = document.querySelector("#output");
var foodList = document.querySelector("#food-list");
var date = new Date();
var currentYear = date.getFullYear();
var howOld = currentYear - hamster.yearOfBirth;
var yearsText = "year";

if (howOld > 1) {
  yearsText = "years";
}

heading.innerHTML = hamster.name;
subHeading.innerHTML = "- the " + hamster.type + " -";
info.innerHTML =
  "<p>It´s a " +
  hamster.gender +
  " hamster</p>" +
  "<p>It was born in " +
  hamster.yearOfBirth +
  " and is  " +
  howOld +
  " " +
  yearsText +
  " old </p>" +
  "<p>He only got " +
  hamster.numberOfLegs +
  " legs </p>";
button1.innerHTML = "Eat";
button2.innerHTML = "Sleep";
button3.innerHTML = "Awake";
button4.innerHTML = "Whistle";

var sound = new Audio();

function eat() {
  output.innerHTML = hamster.eat.eatText();
  output.innerHTML +=
    '<img class="hamster-pic hamster-eat-pic" src="' +
    hamster.eat.imgUrl +
    '">';
  sound.src = "/sound/munchin-95618.mp3";
  sound.pause();
  sound.play();
}

button1.onclick = eat;

function sleep() {
  output.innerHTML = hamster.sleep.sleepText();
  output.innerHTML +=
    '<img class="hamster-pic" src="' + hamster.sleep.imgUrl + '">';
  sound.src = "/sound//snoring-71560.mp3";
  sound.pause();
  sound.play();
}

button2.onclick = sleep;

function awake() {
  output.innerHTML = hamster.awake.awakeText();
  output.innerHTML +=
    '<img class="hamster-pic" src="' + hamster.awake.imgUrl + '">';
  sound.src = "/sound/soap-bubbles-pop-96873.mp3";
  sound.pause();
  sound.play();
}

button3.onclick = awake;

function whistle() {
  output.innerHTML = hamster.whistle.whistleText();
  output.innerHTML +=
    '<img class="hamster-pic" src="' + hamster.whistle.imgUrl + '">';
  sound.src = "/sound/whistle-96483.mp3";
  sound.pause();
  sound.play();
}

button4.onclick = whistle;

for (var i = 0; i < hamster.favoriteFood.length; i++) {
  foodList.innerHTML += "<li>" + hamster.favoriteFood[i] + "</li>";
}
