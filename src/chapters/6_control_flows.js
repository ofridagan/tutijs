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
 * Javascript supports a small number of control-flow statements: 'if...else', 'switch...case', 'for' and 'while'.
 * Control-flow statements are used to control the flow of the program.
 * Without control-flow statements the program is usually executed line-by-line. For example, line 7 is executed after line 6.
 * Control-flow statements are a way to tell the computer which line to execute next.
 *
 */

/*
 * ----------
 * if...else
 * ----------
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
 * --------------
 * switch...case
 * --------------
 *
 *  The switch statement evaluates an expression, matching the expression's value to a case clause,
 *  and executes statements associated with that case, as well as statements in cases that follow the matching case.
 */

 /*
  *  For example:
  */

let vegetablesStore = "";
const expr = 'Papayas';
switch (expr) {
    case 'Oranges':
        vegetablesStore = "Oranges are $0.59 a pound.";
        break;
    case 'Mangoes':
    case 'Papayas':
        vegetablesStore = "Mangoes and papayas are $2.79 a pound."
        break;
    default:
        vegetablesStore = `Sorry, we are out of ${expr}.`;
}

export {vegetablesStore};

/*
 * Take a few moments. Play with it, try to understand what's going on.
 * What do these keywords mean: switch? case? break?? default??
 * I think you can figure it out. Kiss :)
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
