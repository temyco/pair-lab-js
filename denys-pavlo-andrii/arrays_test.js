const SIZE = 10000000;

function badArray() {
    
    for(let i = 0; i< SIZE; i++) {
        let arr = [];
        arr[0] = i;
        arr[1] = 88;
        arr[2] = .5;
        arr[3] = true;
        //arr.push(.05);
    }
}

function goodArray() {
    for(let i = 0; i< SIZE; i++) {
        let arr = [i, 88, .5, true];
        //arr.push(.05);
    }    
}

let startTimeBadArray = new Date().getTime();
badArray();
let endTimeBadArray = new Date().getTime();

let startTimeGoodArray = new Date().getTime();
goodArray();
let endTimeGoodArray = new Date().getTime();

console.log("Bad array " + (endTimeBadArray - startTimeBadArray) + "(ms)");
console.log("Good array " + (endTimeGoodArray - startTimeGoodArray) + "(ms)");