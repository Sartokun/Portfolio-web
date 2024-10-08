var sum = 0;
var i = 0;

while (i < 100){
    if (i %2 == 0 || i %5 == 0){
        sum += i;
    }
    i++;
}

console.log("ผลรวมคือ : " + sum)

var sum = 0;

for (i = 0 ; i < 100 ; i++){
    if (i %3 == 0 && i %5 == 0){
        sum += i;
    }
}

console.log("ผลรวมคือ : " + sum)