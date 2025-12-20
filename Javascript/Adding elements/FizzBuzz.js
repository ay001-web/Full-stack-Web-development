var output=[1];
var Count= 1;
function FizzBuzz() {
    if(Count%3==0 && Count%5==0) {
        output.push("FizzBuzz");
    }
    else if(Count%3==0) {
        output.push("Fizz");
    }
    else if (Count%5==0) {
        output.push("Buzz");
    }
    else {
        output.push(Count);
    }
    Count++;


}
console.log(FizzBuzz());