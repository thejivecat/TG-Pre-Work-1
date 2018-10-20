import {aircrafts, flightReqs, meetsStaffReqs, meetsSpeedRangeReqs} from './airplane';
function displaySpeedRangeStatus(){
  aircrafts.forEach(function(element){
    console.log(element.name + ' meets speed range requirements: ' + meetsSpeedRangeReqs(element.maxSpeed, element.minSpeed, flightReqs.requiredSpeedRange));
  });
};
displaySpeedRangeStatus();
function displayFuelCapacity() {
  aircrafts.forEach(function(element) {
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

displayFuelCapacity();

function displayStaffStatus() {
  aircrafts.forEach(function(element) {
   console.log(element.name + ' meets staff requirements: ' + meetsStaffReqs(element.availableStaff, flightReqs.requiredStaff) );
  });
}

displayStaffStatus();
I learned how to import alternatively named exports (which used export as) and how to import those items with different names using import as
