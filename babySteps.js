// variable to print
var total = 0;

// print process.argv
process.argv.forEach(function (val, index, array){
    if (index > 1) {
        total += parseInt(val);
    }
});

console.log(total);