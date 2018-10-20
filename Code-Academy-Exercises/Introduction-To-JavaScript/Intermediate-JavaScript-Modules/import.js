import Airplane from './airplane';
function displayFuelCapacity() {
  Airplane.availableAirplanes.forEach(function(element){
    console.log('Fuel Capacity of ' + element.name  + ':' + element.fuelCapacity);
  });
};
displayFuelCapacity();
I learned how to use import keyword to import objects 
