function add(
  n1: number,
  n2: number,
  showResult: boolean,
  resultPhrase: string
) {
  if (showResult) {
    const result = n1 + n2;
    console.log(resultPhrase + result);
  } else {
    return n1 + n2;
  }
}

const num1 = 5;
const num2 = 3;
const printResult = true;
const resultPhrase = 'Result is: ';

add(num1, num2, printResult, resultPhrase);
