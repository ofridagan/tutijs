export const __name = "VI. Control Flows";
export const __disabled = true;

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

// let answer = "1 + 1 = 2";
// if (1 + 1 === 3) {
//     answer = "1 + 1 = 3";
// };

// export {answer};

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

// const amount = 5;
// let numberOfBalls;

// if (amount === 0) {
//     numberOfBalls = "Matan has no balls :(";
// } else if (amount === 1) {
//     numberOfBalls = "Matan has only one ball";
// } else {
//     numberOfBalls = `Matan has ${amount} balls :)`;
// };

// export {numberOfBalls};

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

// let vegetablesStore = "";
// const expr = 'Papayas';
// switch (expr) {
//     case 'Oranges':
//         vegetablesStore = "Oranges are $0.59 a pound.";
//         break;
//     case 'Mangoes':
//     case 'Papayas':
//         vegetablesStore = "Mangoes and papayas are $2.79 a pound."
//         break;
//     default:
//         vegetablesStore = `Sorry, we are out of ${expr}.`;
// }

// export {vegetablesStore};

/*
 * Take a few moments. Play with it, try to understand what's going on.
 * What do these keywords mean: switch? case? break?? default??
 * I think you can figure it out. Kiss :)
 */

/*
 * Awesome! These were the "conditional' control flow statements: if...else and swtich...case
 *
 * Let's move on to - loops! yeah!
 * A loop is a piece of code which runs over-and-over.
 *
 * Why do we need loops?
 * Well, a simple answer is this is where a computer really shines - doing the same (or similar) operation again and again.
 * A computer doesn't get tired, or confused... it can repeate itself for hours without complaining.
 *
 * If you think about it, a Macbook Pro can run about 2.3 billion operations in one second (2.3GHz).
 * A typical application can have a few thousands lines. Few millions max.
 * These means a computer should be able to run ANY program in under 1 second!
 * Why doesn't it? Why do most program we use run for much longer?
 *
 * You guessed it - loops.
 * In fact, in most applications, the program is spent most of the time inside a loop.
 */

/*
 * ----------
 * while loop
 * ----------
 * A while loop is used to repeate a block (few statements surrounded by {}) as long as a specific condition holds.
 *
 * Let's look at an example:
 */

// const allProducts = [
//     {name: "socks", price: 5},
//     {name: "shirt", price: 22},
//     {name: "pants", price: 38},
//     {name: "dress", price: 60},
//     {name: "dyson", price: 90}
// ]

// let productsToBuy = "";
// let dollarsLeft = 110;
// let productIndex = 0;

// while (productIndex < allProducts.length && dollarsLeft >= allProducts[productIndex].price) {
//     const currentProduct = allProducts[productIndex];
//     productsToBuy += ` ${currentProduct.name}`;
//     dollarsLeft -= currentProduct.price;
//     productIndex++;
// }

// export {productsToBuy, dollarsLeft};

/*
 * As usual, really spend some time to try and understand the code above... if you need help, read on.
 *
 * First, we define an array of products - allProducts. Every product has a name and a price.
 * Next we intialize some variables:
 * productsToBuy - the output message.
 * dollarsLeft - this represents our budget.
 * productIndex - this is the current product position we are looking at
 *
 * Next, a while statement followed by a condition.
 * The statements on lines 149-152, are repeated as long as the condition (productIndex < allProducts.length && dollarsLeft >= allProducts[productIndex].price) evaluates to true.
 * the variable productIndex starts off with a value of 0, and line 152 increment it by 1.
 * As a result, every loop iteration can deal with the next product in the allProducts array - the current product is stored in a currentProduct const.
 * Note currentProduct is a constant defined inside the while block. It is recreated on every iteration and is constant through the entire iteration.
 *
 * Line 150 collects the information we want to display - the names of the products we can buy.
 * Line 151 is keeping track of the budget by redrawing the product price from out budget, stored in dollarsLeft.
 */

/*
 * OK, OK that wasn't such an exciting chapter. Let's just move on.
 * Next chapter is probably the most important one - Functions!
 */

/*
 * %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
 * Congradulations!!! You've reached the end of the sixth chapter!
 * %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
 */

/* >>>>>> Next chapter: Functions >>>>>> */
