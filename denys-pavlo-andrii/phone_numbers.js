function randomNumber() {
    let text = "";
    let possible = "0123456789";

    for (var i = 0; i < 7; i++) {
        text = text + possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text
};

function randomCode () {
    var code =['38050', '38063', '38066', '38067', '38068', '38073', '38093', '38095', '38096', '38097', '38098', '38099']
    var rand = Math.floor(Math.random() * code.length);
    return (code[rand])

};

const COLLECTION_SIZE = 100000;
let startTimeArray = new Date().getTime();

let arr = []
for (let j = 0; j< COLLECTION_SIZE; j++) {
    let phoneNumber = randomCode()+randomNumber();

    if(arr.indexOf(phoneNumber) == -1) {
        arr.push(phoneNumber)
    }
}

let endTimeArray = new Date().getTime();
console.log("Array contains " + arr.length + " elements in " + (endTimeArray - startTimeArray) + "(ms)")

let startTimeSet = new Date().getTime();

let set = new Set();

for(let k = 0; k < COLLECTION_SIZE; k++) {
    let phoneNumber = randomCode()+randomNumber();
    set.add(phoneNumber)
}
let endTimeSet = new Date().getTime();


console.log("Set contains " + set.size + " elements in " + (endTimeSet - startTimeSet) + "(ms)")

