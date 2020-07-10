export const __name = "III. Variables";
export const __disabled = true;

/*
 * ########################################  
 *     tuti.js - III. Variables
 * ########################################  
 *
 */


/*
 * ------- Chapter Goals ------------------
 * Learn how to declare and use variables
 * Time: 20 minutes
 * ----------------------------------------
 */

/*
 * Most of what a computer program does is usually just about working with information - creating it, storing it, moving it around, and performing calculations on it.
 * Here are two examples:
 *   1. An online shop - probably needs to work with information about products, quantities, prices and the shopping cart.
 *   2. GPS navigation app - probably needs to work with maps, routes and real-time traffic.
 *
 * It can be useful to think of values as a virtual representation of the relevant elements of reality. 
 * For example, while products in the real world could have many, many properties like weight, temperture, etc. When we design an online store app,
 * we may only choose to represent prices and quantites, because those are the properties relevant to our application.
 *
 * TODO add example (mathan is a boy, what he is is the value. the word 'mathan' is the variable used to reference the person named 'mathan')
 * TODO and also rephrace the following
 * No matter what kind (or 'type') of information a JS program uses - the way to work with that information is to store it in a variable.
 * A variable is just a name you use to reference the information stored inside it.
 * The information stored in the variable is called a - value.
 *
 * In a sense, a value is a more important concept than variables.
 * The information itself is a value. Variables are just names you use to reference the values in your program.
 *
 * In many cases, a specific value would have many names. i.e the same exact value can be referenced by many variables.
 * For this reason it's better to think of variables as 'name-tags' rather than 'boxes' that store stuff.
 */

/*
 * OK, OK, enough with the philosophy, let's see some variables.
 * Well, actually you already seen some in previous chapters...
 *
 * There are 2 ways to declare a new variable - using one of the following 2 keywords: let or const (there is also 'var' which is the old way, and is not recommanded).
 * The only difference between them is that a variable declared using const can only be used to reference a single value, and cannot be reassigned,
 * while a variable declared with let can be reassigned over and over for as much as you like.
 *
 * The best practice is to use 'const' whenever you can, unless you must use let.
 * The reason is that a program which mainly uses const, rather than let, is probably simpler and easier to follow.
 */

/*
 * The following line declares a new variable
 */
let girl;

/*
 * Awesome!
 * We now have a variable ready to be used. As it is though, it's pretty damn useless.
 * Let's assign a value to it.
 */

girl = "Tuti Dagan";

/* 
 * mmm interesting.
 * There are actully 2 things happening in the above statement. Let's break it down:
 *   1. "Tuti Dagan" - A string (text) value is created containing a list of characters - 'T', 'u', 't', 'i', ' ', 'D', 'a', 'g', 'a', 'n'.
 *    This string value is stored in the computer memory the moment you create it, even if you do nothing else with it (it will get automatically cleared if there are no variables referencing it - this proccess is called 'garbage collection').
 *   2. girl = ... - The previously created value, is assigned to the previously declared girl variable. In other words, the variable 'girl' now references the value "Tuti Dagan".
 *      Note, we made used of the 'assignment' operator denoted by '='. More about that in the "operators" chapter.
 */

/*
 * As we did in previous chapters, if you want to tell tuti.js that you would like to view the value of the variable - you need to export it:
 */

//export {girl};

/*
 * See? Cool! (don't see it? did you forgot to comment line #2 in this file?)
 * Now let's try declaring a constant variable:
 */

const pi = 22/7;

/*
 * See the difference? constants needs to be declared and assigned in the same statement.
 * The above statement actually does 4 things:
 *   1. A constant variable named 'pi' is declared.
 *   2. Values are created for the numbers 22 and 7 and they are stored in memory.
 *   3. The expression 22/7 is evaluated and a new value is created and stored in memory: 3.142857142857143
 *   4. The value 3.142857142857143 is assigned to variable 'pi'.
 */

/*
 * What do you think would happen if you uncomment the following line? Try it!
 */

//pi = 3.141592653;

/*
 * Exactly. An error. Open chrome-developer-tools console in the browser to see the error. Leave it open. It's useful.
 *
 * This kind of error is called a compile-time error, because this type of error can be discovered just by READING your program, no need to EXECUTE it!
 * The other kind of error is called run-time error. This kind of error cannot be predicted ahead of time (really. mathematically proven it can't be done).
 * With run-time errors, the syntax of the program can be perfectly OK, but something unexpected happened which JS just don't know how to deal with.
 */

/*
 * Can you write the code needed to export the value of 'pi' so it'll show up in the browser?
 * Notice we have used 2 different ways of exporting variables.
 *   1. while declaring a variable: export const tuti = "is mine";
 *   2. a already declared variables list: export {fiki, tuti, baby};
 * Try both... not at the same time though, as you will get an error.
 */

/* --------- export (number 2) code here ------- */

/* --------------------------------------------- */

/*
 * Cool.
 * Ready for your first, real challenge?
 * I'm excited! You? Let's go.
 */

/*
 * Following are two variables
 */

let cute = "Mel";
let annoying = "Soofgi";

/*
 * Your challenge is to write a piece of code that switches the values of two variables.
 * So after your code runs, the value of cute should be "Soofgi" and the value of annoying would be "Mel".
 * Keep in mind the code you write should not relay on the actual values "Mel" and "Soofgi" and should work even if you later change those.
 */

/* -------- Your code here ---------- */

/* ---------------------------------- */

/* let's export cute, and annoying. uncomment the following line */
//export {cute, annoying};

/*
 * Nice, ah? We're moving data around.
 * 
 * I know what you're thinking... give me another one!
 * Sure, why not?
 */

/* 
 * What if you knew the values of the two variables were numbers.
 * would you be able to write code for switching the numeric values of two variables, but WITHOUT declaring any new variables?
 */

/* here are two numberic variables for example */
let small = 578;
let big = 13;

/* -------- Your code here ---------- */

/* ---------------------------------- */

/* uncomment to view in browser */
//export {small, big};

/*
 * I'm so proud of you! You get a kiss :)
 * You completed this chapter successfully - it only gets better from here.
 */

/*
 * %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
 * Congradulations!!! You've reached the end of the third chapter.
 * %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
 */

/*
 * ----- What did I learn? ----------
 * In the heart of every JS program are value. chunks of information you can pass around and perform tasks with.
 * The way you reference values is with the use of variables.
 * ----------------------------------
 */
 
/* >>>>>> Next chapter: Types >>>>>> */
