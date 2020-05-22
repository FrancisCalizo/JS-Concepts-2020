function add(n1, n2, showResult, resultPhrase) {
    if (showResult) {
        var result = n1 + n2;
        console.log(resultPhrase + result);
    }
    else {
        return n1 + n2;
    }
}
var num1 = 5;
var num2 = 3;
var printResult = true;
var resultPhrase = 'Result is: ';
add(num1, num2, printResult, resultPhrase);
