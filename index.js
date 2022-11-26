// distance in Blocks challenge
const distanceFromHqInBlocks = function(value){
    if (value < 42){
        return (42 - value);
    } else
    return value - 42;
   
};
const pickupLocation = distanceFromHqInBlocks(35);


// distance in Feet challenge
const distanceFromHqInFeet = function(value) {
    if (value < 42) {
        return((42 - value) * 264);
    } else
    return ((value - 42) * 264);

   
}

//distance Trav in Feet
function distanceTravelledInFeet(start, destination) {
    if (destination < start) {
        return((start-destination) * 264);
    } else
    return ((destination - start)*264);
    
}


// Calculate Fare

function calculatesFarePrice(start, destination){
    const distance = distanceFromHqInFeet(start, destination);
    if (distance < 400){
        return 0;
    } else if (distance > 400 && distance < 2000) {
        return (distance - 400)*2/100;
    } else if ( distance > 2000 && distance < 2500){
        return 25;
    } else {
        return 'cannot travel that far';
    } 
} 



