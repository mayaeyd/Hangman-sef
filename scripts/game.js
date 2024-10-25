const words = [
  "apple",
  "banana",
  "orange",
  "grape",
  "mango",
  "peach",
  "pear",
  "plum",
  "melon",
  "kiwi",
  "car",
  "truck",
  "train",
  "plane",
  "boat",
  "ship",
  "bike",
  "scooter",
  "bus",
  "subway",
  "house",
  "apartment",
  "office",
  "school",
  "hospital",
  "library",
  "garden",
  "park",
  "market",
  "store",
  "table",
  "chair",
  "couch",
  "bed",
  "shelf",
  "drawer",
  "lamp",
  "desk",
  "rug",
  "clock",
  "computer",
  "phone",
  "mouse",
  "keyboard",
  "monitor",
  "printer",
  "router",
  "charger",
  "camera",
  "tablet",
  "happy",
  "sad",
  "angry",
  "excited",
  "scared",
  "nervous",
  "bored",
  "calm",
  "brave",
  "proud",
  "cat",
  "dog",
  "fish",
  "bird",
  "horse",
  "sheep",
  "goat",
  "cow",
  "chicken",
  "pig",
  "blue",
  "red",
  "green",
  "yellow",
  "purple",
  "orange",
  "black",
  "white",
  "brown",
  "gray",
  "sun",
  "moon",
  "star",
  "planet",
  "galaxy",
  "comet",
  "meteor",
  "asteroid",
  "space",
  "universe",
  "book",
  "pen",
  "pencil",
  "paper",
  "eraser",
  "sharpener",
  "ruler",
  "notebook",
  "bag",
  "backpack"
];

const letters = [];

const randomWord = words[Math.floor(Math.random()*words.length)];
console.log(randomWord);

for(char of randomWord){
  letters.push(char);
}


var dashes = [];

for( var i=0 ; i<randomWord.length; i++){
  dashes.push(" __ ")
}

var answerSection = document.getElementById("answer-section");

answerSection.innerHTML = dashes.join(" ");



  