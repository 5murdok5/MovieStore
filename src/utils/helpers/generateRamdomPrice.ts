export function randomPrice(min: number, max: number, decimalPlaces: number = 2) {  
    var rand = Math.random()*(max-min) + min;
    var power = Math.pow(10, decimalPlaces);
    return Math.floor(rand*power) / power;
}