
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function generateCars(numberOfCars) {
  const cars = [];
  const carMakes = ['Honda', 'BMW','Fiat','Skoda','Volvo'];
  const carColors = ['lightgrey', 'lightcyan','lightyellow','lightgreen','lightcoral','lightpink'];
  for (let i = 0; i < numberOfCars; i++) {
      const car = {};
      const randomMakeIndex = randomIntFromInterval(0, carMakes.length - 1);
      const randomColorIndex = randomIntFromInterval(0, carColors.length - 1);
      car.make = carMakes[randomMakeIndex];
      car.color = carColors[randomColorIndex];
      car.speed = randomIntFromInterval(0, 100);
      cars.push(car);
  }
  return cars;
}

// Step 1.1-----------------------

const cars = generateCars(10);
console.log("Cars generated:");
console.log(cars);

const fastCars = cars.filter(function(car) {
  if(car.speed > 30 && car.speed <= 60)
    return true;
});

console.log("Fast cars")
console.log(fastCars);

// Step 1.2-----------------------

const notYellow = cars.filter(function(car){
  if(car.color =! "lightyellow")
    return true;
  else{
    return false;
  }
  
});

console.log("non-yellow cars");
console.log(notYellow);

// Step 1.3 ----------------------

const makeDanish = cars.map(function(car){

});

console.log("Translated to danish");
console.log(makeDanish);
