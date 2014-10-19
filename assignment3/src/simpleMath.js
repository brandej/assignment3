SimpleMath = function() {};
/**
 * @param {number} number - input into the factorial function
 *
 * @return {number} factorial of number, throw an error
 * if the number is negative
*/
SimpleMath.prototype.getFactorial = function(number) {

  if (typeof number != 'number') {
    throw new Error('There is no factorial for non-numbers');
  }
  else if (number < 0) {
    throw new Error('There is no factorial for negative numbers');
  }
  //your code here
  if (number === 0) {
    number = 1;
  }
  else {
      var n;
      for (n = number - 1; n > 0; n--) {
        number += n;
      }
  }
  return number;
  //end your code
};

/**
* @param {number} number - number to test
*
* @return {number} - 1 if `number` is positive, 0 if 0, -1 if negative.
* Behaviour on non-numbers is undefined.
*/
SimpleMath.prototype.signum = function(number) {
 //your code here
 if (number < 0) {
  return -1;
 }
 else if (number % 2 == 0) {
  return 1;
 }
 else if (number % 2 == 1) {
  return 0
}
 //end your code
};

/**
* @param {number} number1 - first number to average
* @param {number} number2 - second number to average
*
* @return {number} the mathematical average of the two numbers.
*/
SimpleMath.prototype.average = function(number1, number2) {
  //your code here\
  var number = (number1 + number2) / 2;
  return number;
  //end your code
};

