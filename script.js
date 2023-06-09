var numbers = Array.from({length: 100}, (_, i) => i + 1);
var originalNumbers = [...numbers];
var newIcon = "img/favicon2.ico";

function agafa() {
  var rangeInput = document.getElementById("rangeInput").value;

  // Check if the input value is valid
  if (isNaN(rangeInput) || rangeInput <= 0) {
    document.getElementById("rangTxt").innerHTML = "<b>Si us plau, entreu un nombre vàlid!</b>";
    return;
  }

  document.getElementById("rangTxt").innerHTML = "";
  document.getElementById("icona").href = newIcon;

  // Convert the input value to an integer
  var range = parseInt(rangeInput);

  // Initialize an array of numbers from 1 to the range
  numbers = Array.from({length: range}, (_, i) => i + 1);
  originalNumbers = [...numbers];

  document.getElementById("info").innerHTML = "Feu clic al botó per generar un nombre aleatori entre 1 i " + numbers.length;
  document.title = "Nombres Aleatoris"
}

function generateNumber() {
  

  if (numbers.length === 0) {
    resetNumbers(2)
    return;
  }

  // Get a random index from the array
  var randomIndex = Math.floor(Math.random() * numbers.length);

  // Get the random number from the array
  var randomNumber = numbers[randomIndex];

  // Remove the random number from the array to prevent repetition
  numbers.splice(randomIndex, 1);

  // Display the random number in the HTML
  document.getElementById("result").innerHTML = "El teu nombre aleatori és: " + randomNumber;
  document.title = randomNumber + " - Nombres Aleatoris"
}

function resetNumbers(tipus) {
  // Restore the original array of numbers
  numbers = [...originalNumbers];

  if (tipus == 1) {
    document.getElementById("result").innerHTML = "S'ha tornat a començar!";
  } else {
    document.getElementById("result").innerHTML = "No queden més nombres!<br>Tornarà a començar de 0";
    document.title = "Nombres Aleatoris"
    }
}
