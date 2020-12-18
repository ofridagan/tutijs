export const __name = "VI. Control Flows";
//export const __disabled = true;

/*
 * ########################################  
 *     tuti.js - VI. Control Flows
 * ########################################  
 *
 */


/*
 * ------- Chapter Goals ------------------
 * Learn about the main way in JS to control the flow of statements execution.
 * Time: about 2 hours
 * ----------------------------------------
 */

/*
 * Javascript supports a small number of control-flow statements: 'if...else', 'for' and 'while'.
 * Control-flow statements are used to control the flow of the program.
 * Without control-flow statements the program is usually executed line-by-line. For example, line 7 is executed after line 6.
 * Control-flow statements are a way to tell the computer which line to execute next.
 *
 */

/*
 * For example:
 */

let answer = "1 + 1 = 2";
if (1 + 1 === 3) {
    answer = "1 + 1 = 3";
};

export {answer};

/*
 * See? In the example above, line 31 is executed first, and a value of "1 + 1 = 2" is assigned to the answer variable.
 * Next, line 32 starts with the 'if' keyword. This tells the computer to first evaluate the condition inside the parentheses (1 + 1 === 3), which evalutes to the value - false.
 * Because the condition evaluates to false, the next line which is executed will be line 35. Line 33 is completely ignored.
 *
 * Try to change the condition to one that evaluates to true and see what happens.
 */

/*
 * The 'if' control statement can also be followed by an 'else' statement.
 * The statements inside the else block (a block is a list of statements surrounded by curly braces {}), are executed when the condition evaluates to false.
 * An 'else if' can also be used to add another condition to be evaluted.
 *
 * This will be much clearer with an example:
 */

const amount = 5;
let numberOfBalls;

if (amount === 0) {
    numberOfBalls = "Matan has no balls :(";
} else if (amount === 1) {
    numberOfBalls = "Matan has only one ball";
} else {
    numberOfBalls = `Matan has ${amount} balls :)`;
};

export {numberOfBalls};

/*
 * Make sure it works, change 'amount' to test all possible results.
 */

/*
 * Operators supported in Javascript
 *
 * The following is a list of the most frequently used operators in JS.
 * For a full list visit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
 *
 * Assignment Operators
 * --------------------
 * An assignment operator assigns a value to its left operands based on its right operand.
 *
 * simple assignment (=). x = y assigns the x variable the value of y.
 * addition assignment (+=). x += y assigns the value of x + y to x.
 * i.e the expression x += y is a shorthand for x = x + y.
 * there are also (-=), (*=), (/=), etc.
 *
 * the increment (++) and decrement (--) operators have two flavors each:
 * prefix (++x) - adds 1 to x, and returns the new value. same with --x.
 * postfix (x++) - adds 1 to x, and return the original value, before adding 1. same with x--.
 *
 * The increment and decrement operators (both prefix and postfix) can be 
 * The ++ and -- operators also returns a value, but they also have a side-effect - changing the value of the variable.
 * This is why, while other operators can accept expressions as operands - for example arr[2] + arr[3], the operands of the ++ and -- operators must be a variable name.
 *
 *
 * Arithmatic Operators
 * --------------------
 *
 * plus (+), minus (-), multiple (*), division (/) - all work more or less as you expect.
 *
 * reminder (%) - returns the integer reminder of dividing two operads. For example 30 % 7 return 2.
 *
 * exponentiation (**) - returns the first operand to the power of the second. 2 ** 3 return 8. 10 ** -1 returns 0.1
 *
 * Unary negation (-) - returns the negation of its operand. -(3+5) returns -8.
 *
 * Unary plus (+) - attempts to convert the operand to number. +"3" returns 3. +true returns 1.
 *
 * Logical Operators
 * -----------------
 *
 * Logical operators work with boolean values (true, false).
 *
 * binary logical AND (&&) - returns true if both operands are true, otherwise returns false. true && false returns false.
 * binary logical OR (||) - returns false if both operands are false, otherwise return true. true && false return true.
 * unary logical NOT (!) - returns true if its operand is false, otherwise returns false. !false returns true.
 *
 * Comparison Operators
 * --------------------
 *
 * Strict Equal (===), returns true if both operands are equal, otherwise false.
 * Strict Not Equal (!==), returns false if both operands are equal, otherwise true.
 * greater than (>) returns true if the left operands is bigger than the right.
 * greater than or equals (>=), returns true if the left operands is bigger than or equal to the right.
 * simalar less than (<) and less than or euals (<=) are available.
 *
 * equals (==), return true if the two operands are equal, while allowing for type conversion. for example the following are true: 3 === "3", 1 == true.
 * The (none strict) equals operator, athough popular, is now considered to be a bad practice in JS and tends to lead to bugs. Prefer to use (===) instead.
 *
 * String operations
 * --------------------
 *
 * string concatanation (+). "tuti" + "dagan" returns "tutidagan".
 * the (+=) assignment operator is also available for strings.
 *
 * Comma operator
 * --------------
 *
 * Not a very common operator, all it does is evaluate both the left and right operands and returns the value of the right.
 * For example:
 */

let counter = 0;
let family = '';
family += (counter++, 'tuti');
family += (counter++, ', fiki');
family += (counter++, ', mathan');
//export {family, counter};

/*
 * The delete operator
 * -------------------
 *
 * The (delete) operators removes a propery from an object. delete person.lastName removes the property 'lastName' from the person object.
 */

/*
 * OK, OK that wasn't such an exciting chapter. Let's just move on.
 * Next chapter is probably the most important one - Functions!
 */

/*
 * %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
 * Congradulations!!! You've reached the end of the fifth chapter!
 * %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
 */
 
/* >>>>>> Next chapter: Functions >>>>>> */
