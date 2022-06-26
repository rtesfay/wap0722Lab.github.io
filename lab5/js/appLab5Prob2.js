const str=['John', 'Allen', 'Elsa', 'Aregawi', 'Bob'];

const getNewArray= str.filter(greaterLength);

function greaterLength(length, index, array){
    return array[index].length>5;
}

console.log(getNewArray);