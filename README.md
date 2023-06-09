[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11259602&assignment_repo_type=AssignmentRepo)

# Programming Foundations CA, object in JavaScript

Using JavaScript Notation to describe a real item from my everyday life as an object.

This item contain well-named properties that describe my chosen item.
Required property types:

- String
- Number
- Boolean
- Array
- Function

# Hamster Object

I´ve created "hamster object", which describes my hamster, Tripple X Baltazar as an object in JavaScript.

This object has the following properties:

- Name (String), the name of the hamster
- Type (String), the type of the hamster
- Gender (String), the gender of the hamster, male or female
- Colors (Array), the colors of the hamster, three different colors
- NumberOfLegs (Number), how many legs the hamster has
- YearOfBirth (Number), the year the hamster was born
- FavoriteFood (Array), the different types of the hamsters favorite food
- RespondsWhenYouWhistle (Boolean), shows if the hamster responds to whistling
- Whistle (Function), puts out a string of text that describes what the hamster do when you whistle
- Sleep (Function), puts out a string of text that describes that the hamster is sleeping
- Awake (Function),puts out a string of text that describes what the hamster do when it is awake
- Eat (Function),puts out a string of text that describes the hamster eating

# Nested objects

Eat, Sleep, Awake and Whistle are nested objects which contains image source, and a function

sleep: {
imgUrl: "/images/hamster_sleeping.png",
sleepText: function () {
return "- Tripple X is resting to be ready for an active night -";
},
}

# Arrays of objects

I added an array of objects, which describes the different items inside the hamster cage

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

# References:

Pictures : Freepik
Sound: Pixabay
