const hamster = {
  name: "Trippel X Baltazar",
  type: "Dwarf hamster",
  gender: "Male",
  colors: ["grey", "white", "brown"],
  numberOfLegs: 3,
  yearOfBirth: 2022,
  favoriteFood: ["apple", "grapes", "cucumber", "melon"],
  respondsWhenYouWhistle: true,
  whistle: function () {
    console.log(
      "Tripple X Baltazar looks out the door of his wooden house, and comes out to say hi"
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
  eat: function () {
    console.log(
      "Stuffs as much food as he can in his mouth, so that he gets chubby cheeks"
    );
  },
};
