const numbers =[5,10,15,20,25];

const greater = numbers.reduce(sum,0);

function sum(accumulator, value){
    return accumulator+value>20;
};


console.log(greater);