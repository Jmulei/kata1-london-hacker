// You are given an array of a journey in London, UK. The array will contain bus numbers and TFL tube names as strings e.g.

// ['Northern', 'Central', 243, 1, 'Victoria']

// Journeys will always only contain a combination of tube names and bus numbers. Each tube journey costs £2.40 and each bus journey costs £1.50. If there are 2 or more adjacent bus journeys, the bus fare is capped for sets of two adjacent buses and calculated as one bus fare for each set.

// Your task is to calculate the total cost of the journey and return the cost rounded to 2 decimal places in the format (where x is a number): £x.xx

const getSymbolFromCurrency = require('currency-symbol-map');

const GBP = getSymbolFromCurrency('GBP');

let journey = ['Northern', 65, 'Central', 'Califonia', 35, 243, 324, 4545, 56577, 'Victoria'];

let numbers = 0;
let tfl_fare = 0;
                                                                                                                                                                                                                                                                                        
//Find the number of adjacent bus journeys and return the total number of pairs.
function findPairs(){
    let double_bus = 0;

    for(let i = 0; i < journey.length; i++){
        if(!(isNaN(journey[i])) && !(isNaN(journey[i+1]))){
            double_bus ++;
        }
    }

    return Math.floor((double_bus + 1) / 2);
}

//count total number of bus journeys 
journey.forEach( el => {
    if( !(isNaN(el))){
        numbers ++;
    }
});

//Calculate total bus fare
function calculateTotalBusFare(){
    let bus_fare = 0;
    single_bus = numbers- (findPairs() *2);
    bus_fare = (( findPairs() + single_bus) * 1.50);

    return bus_fare;
}

//Count the total number of TFL journeys
journey.forEach( el => {
    if((isNaN(el))){
        tfl_fare += 2.40;

    }
});

let fare = (calculateTotalBusFare() + tfl_fare).toFixed(2);

// console.log("Total bus pair " + findPairs());
// console.log("Total bus journey " +numbers);
// console.log("Total Bus fare: " + calculateTotalBusFare());
// console.log("Tube fare: " + tfl_fare);

console.log( "Total fare:  " + GBP + fare );
