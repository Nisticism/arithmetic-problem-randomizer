let numberA = 0;
let numberB = 0;

function test() {
  console.log("test");
  console.log(randomize(3, 10));
}

function randomize(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}