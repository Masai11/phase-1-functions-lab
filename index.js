// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    return Math.abs(42 - someValue);
  }
  
  function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
  }
  
  function distanceTravelledInFeet(someValue, feet) {
    return Math.abs((feet - someValue) * 264);
  }
  
  function calculatesFarePrice(someValue, feet) {
    const fare = distanceTravelledInFeet(someValue, feet);
    if ( fare < 400) {
      return 0;
    } else if (fare < 2000 && fare > 400) {
      return 0.02 * (fare - 400);
    } else if (fare > 2000 && fare < 2500) {
      return 25;
    } else if (fare > 2500) {
      return "cannot travel that far";
    }
  }