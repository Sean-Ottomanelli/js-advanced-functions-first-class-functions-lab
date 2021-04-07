// Code your solution in this file!
function returnFirstTwoDrivers(array) {
    let newArray = array.slice(0,2);
    return newArray;
}

function returnLastTwoDrivers(array) {
    let newArray = array.slice(-2);
    return newArray;
}

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier = function(multiplyValue){
    return function (value) {
        return multiplyValue*value;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

// const selectDifferentDrivers = function(arrayOfDrivers, returnFunction) {
//     return returnFunction(arrayOfDrivers);
// }

function selectDifferentDrivers(arrayOfDrivers, returnFunction) {
    return returnFunction(arrayOfDrivers)
}