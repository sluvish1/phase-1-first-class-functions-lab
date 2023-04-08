// Code your solution in this file!
const scuberDivers = [`Antonia`,`Nuru`, `Amari`,`Mo`]

const returnFirstTwoDrivers = function(scuberDivers){
    return scuberDivers.slice(0, 2)
}
const returnLastTwoDrivers = function(){
    return scuberDivers.slice(2,4)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier = function(num1){
    return function(fare){
        return fare * num1
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(scuberDivers, fn) {
    return fn(scuberDivers);
}