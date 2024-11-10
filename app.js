let array = [98,99,82,34,50,63,78,90,45,34,56,67,87,53]

function sum(array) {
    let totalNumber = 0;

    for (let i = 0; i < array.length; i++) {
        totalNumber += array[i];
        
    }
    return totalNumber;
}
// console.log(sum(array));

function average(array) {
    
    let totalNumber = sum(array);
    return totalNumber/array.length;
}
console.log(average(array));
document.write(average(array))