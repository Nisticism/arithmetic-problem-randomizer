let numberA = 0;
let numberB = 0;
let streak = 0;
let minValue = 1;
let maxValue = 10;
const title = document.getElementById("app-title");
const problem = document.getElementById("problem");
const input = document.getElementById("input");
const streakText = document.getElementById("streak");
const invis = document.getElementById("invis");

function setup() {
  title.innerText = "Arithmetic Problem Randomizer"
  problem.innerText = randomizeProblem(minValue, maxValue);
}

function randomizeProblem(min, max) {
  numberA = randomize(min, max);
  numberB = randomize(min, max);
  return "What is " + numberA + " + " + numberB + "?";
}

function answer() {
  let answer = parseInt(input.value);
  if (answer && (numberA + numberB) == answer) {
    streak += 1;
    alert("correct");
    maxValue += 1;
    problem.innerText = randomizeProblem(minValue, maxValue);
  } else {
    streak = 0;
    alert("incorrect");
    maxValue = 10;
  }
  streakText.innerText = "Streak: " + streak;
  console.log(input.value);
}

function randomize(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}