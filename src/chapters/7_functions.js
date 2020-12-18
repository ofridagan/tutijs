export const __name = "VII. Functions";
//export const __disabled = true;

/*
 * ########################################  
 *     tuti.js - VI. Functions
 * ########################################  
 *
 */


/*
 * ------- Chapter Goals ------------------
 * Learn all about the operators supported in Javascript.
 * Time: about 0.5 hours
 * ----------------------------------------
 */

/*
 * Javascript, like most programming languages, supports operatios syntax.
 * Operators are language constructs which performs an operaion on its operands (an operad is the value which the operator operates on)..
 *
 * Operators are usally categorized by the number of oprands, and the position of the operator in respect to its operads.
 *
 * Number of operands
 * An operator in JS can be refered to as 'unary', 'binary' or 'ternary', depending on the number of operads it takes (one, two or three respectevly).
 *
 * For example the plus (+) sign in the following expression: x + 5 is a binary operator. The expression evaluate to the sum of the two values in x and 5.
 * x and 5 are called the 'operands' of the '+' operator.
 * 
 * ===== Unary =====
 * Unary operators have the form of: <operator><operand> or <operand><operator>
 * Examples of unary operators: -x, ++i, tuti++
 * Note, ++i and i++ are considered two different operators.
 *
 * ===== Binary =====
 * Binary operators in JS are 'infix', which means the operator comes between its two operands: <operand><operator><operand>
 * Examples of binary operators: 7 * 2, 'tuti' + '.js', x = 1, x > y 
 * --- BTW... not JS ---
 * some languages also support 'prefix' and even 'postfix' operators. a prefix plus operator might look like this: + 5 3 which means the sum 5 and 3
 * some languages even support custom operators which you can define on your own and add to the language.
 * ---------------------
 *
 * ===== Ternary =====
 * There is actually only one, ternary operator - the conditanal operator: condition ? val1 : val2 
 * What does it do? The ? : operator first evaluate the expression before the '?' (condition), if it evaluates to true then val1 is return, otherwise val2.
 *
 */

/*
 * For example:
 */

const price = 99;
const payment = 90;
//export const message = payment >= price ? "Thanks for purchasing our product" : "Hi! thats not enough";

/*
 * Play around a bit with the trenary operator.
 * Can you improve the above example to also tell us when the customer deserves some money back?
 * Try to use only the trenary operator.
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
