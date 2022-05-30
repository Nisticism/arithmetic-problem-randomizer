const title = document.getElementById("app-title");
const problem = document.getElementById("problem");
const input = document.getElementById("input");
const streakText = document.getElementById("streak");
const invis = document.getElementById("invis");
const totalText = document.getElementById("total");
const totalCorrectText = document.getElementById("total-correct");

let numberA = 0;
let numberB = 0;
let streak = 0;
let minValue = 1;
let maxValue = 10;
let total = 0;
let totalCorrect = 0;

function setup() {
  title.innerText = "Arithmetic Problem Randomizer"
  problem.innerText = randomizeProblem(minValue, maxValue);
}

function randomizeProblem(min, max) {
  numberA = randomize(min, max);
  numberB = randomize(min, max);
  return "What is " + numberA + " + " + numberB + "?";
}

async function answer() {
  let result;
  var request = new XMLHttpRequest();
  request.open('GET', 'http://api.mathjs.org/v4/?expr=' + numberA + "%2B" + numberB);
  request.onload = function (e) {
    if (request.readyState === 4) {
      if (request.status === 200) {
        let answer = parseInt(input.value);
        if (answer) {
          if (answer == request.responseText) {
            streak += 1;
            alert("Correct");
            maxValue += 1;
            total += 1;
            totalCorrect += 1;
            problem.innerText = randomizeProblem(minValue, maxValue);
          } else {
            streak = 0;
            total += 1;
            alert("Incorrect");
            maxValue = 10;
          }
        } else {
          alert("Must enter a number!");
        }
        totalText.innerText = "Total Guesses: " + total;
        totalCorrectText.innerText = "Total Correct: " + totalCorrect;
        streakText.innerText = "Streak: " + streak;
      } else {
        console.error(request.statusText);
      }
    }
  };
  request.onerror = function (e) {
    console.error(request.statusText);
  };
  request.send(result);
}

function randomize(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}