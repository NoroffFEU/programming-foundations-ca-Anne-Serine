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

var button1 = document.querySelector(".button1");
var button2 = document.querySelector(".button2");
var button3 = document.querySelector(".button3");
var button4 = document.querySelector(".button4");

console.dir(button1);

button1.onclick = function () {
  console.log(
    "Stuffs as much food as he can in his mouth, so that he gets chubby cheeks"
  );
};

button2.onclick = function () {
  console.log("Resting to be ready for an active night");
};

button3.onclick = function () {
  console.log(
    "Tripple X Baltazar runs in his exercise wheel, grooming and playing around"
  );
};

button4.onclick = function () {
  console.log(
    "Tripple X Baltazar looks out the door of his wooden house, and comes out to say hi"
  );
};
