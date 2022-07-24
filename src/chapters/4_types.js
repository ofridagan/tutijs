export const __name = "IV. Types";
export const __disabled = true;

/*
 * ########################################
 *     tuti.js - IV. Types
 * ########################################
 *
 */

/*
 * ------- Chapter Goals ------------------
 * Learn all about javascript types
 * Time: mmm this could be a long one. about 3 hours
 * ----------------------------------------
 */

/*
 * A 'value' in Javascript is always of a certain type. For example, a number, text, functions, and even custom types that you define - like Cat or ShoppingCart.
 * You can think of a 'type' as a set of values.
 * For example, the type Number is the set of all numbers. You can also think of your own custom type, let's say RoundNumber and define it to be
 * the set of all numbers ending with a zero digit.
 * As you can see RoundNumber is a subset of Number which is a subset of all possible values.
 */

/*
 * In javascript, any variable can be assigned a value of any type, and even change types as your program runs.
 * The following is totaly fine js code:
 */

let two = 2; // two is a variable pointing to a value of type Number
two = "II"; // now, two holds a value of type String
//export {two};

/*
 * The first line declares a new variable 'two' and assign 2 to it - a value of type Number.
 * The second line assigns the text "II" to the same variable - "II" is a value of type String (which is how JS deals with text).
 *
 * So in JS, variables can change types (or more accurately, change the type of values they hold). This feature of a programming language is called 'Dynamic typing'.
 * Other languages (Java for example) which are 'Staticly typed' demand the type of the variable to be declared when creating the variable, and it can never change.
 */

/*
 * Javascript provides you with a few types built-in. It also provides you with a way of creating your own types - we won't cover custom types just yet.
 * Some of the built-in types in javascript:
 *
 * Number - both integer and decimal point numbers.
 * BigInt - for when you need integers values larger than (2^53 - 1), which is the largest integer supported by the Number type.
 * String - list of characters. aka text.
 * Boolean - a type with only two values: true and false
 * Null - a type containing only a single value - null.
 * Undefined - a type containing only a single value - undefined.
 *
 * The above types are called 'primitive types'. More about that later.
 * All other types, including custom ones that you'll define yourself, are all subtypes of the type 'object' (we say that type A is a subtype of type B, if every value of type A is also a value of type B. exactly the same as a subset).
 * object - used for holding a collection of other values.
 *   array - also a collection of values, but listed in order.. value #1, value #2,... etc.
 *   date - used to represent date/time values.
 *   function - yes. Functions are also values in JS. They are used to hold a piece of code that can be executed at later time. (languages which supports functions as regular values are called 'functional languages'. JS is a functional language).
 *   map, set, regexp - more advanced types. we won't cover those here.
 */

/*
 * --------------------
 *       Number
 * --------------------
 */

/*
 * The Number type is used to store, wait for it, numbers!
 * Not much to say really... every number - integer or decimal point can be represented with values of type Number (decimal point numbers are also called floating-point because of the way they are implemented in JS behind the scenes).
 */

/*
 * Try to guess what the following will show in the browser
 */
//export const oneToNine = 123456 * 1000 + 789;

//export const pi = 355 / 113;

//export const devideByZero = 8 / 0;

//export const negativeDevidedByZero = -pi / 0;

//export const what = "tuti" * 7;

//export const whattt = Math.sqrt(-1); // no imaginary numbers in type Number

/*
 * Beside representing all numbers you'll probably ever need, the Number type contains 3 more special values: Infinity, -Infinity (negative infinity) and NaN (short for not-a-number).
 * Those 3 values are there to represent result of calculations which are not simple numbers.
 * for example, divide by 0 would give the result of Infinity or -Infinity appropriately.
 * NaN can be a little confusing... the value NaN, which means 'not a number', IS in fact, a value of type Number. Wait, what???
 * Yes, it's easy to understand it when you think of types just as collection of values. The type Number is just the set containing values like -12, 3.14, 0, and also the 3 values: Infinity, -Infinity and NaN.
 * That's all it is, a set of values. Don't look for something more complicated.. really, stop.
 */

/*
 * --------------------
 *       BigInt
 * --------------------
 */

/*
 * In the rare cases where you need numbers outside the range of Number type which is from -(2^53-1) to (2^53-1) - BigInt got you covered.
 * BigInt can be used to represent integers of unlimited length. But you do pay the price in performance.
 * Since cases where you need such large numbers is quit rare (cryptography, microsecond-precision timestamps) we won't cover it in detail.
 *
 * The way you create a value of type BigInt is just writting the number, followed by the latter 'n'. no space.
 */

/*
 * Let's just see one example and move on, ok?
 */
//export const wowIamBig = 1234567890123456789012345678901234567890n;

/*
 * --------------------
 *       String
 * --------------------
 */

/*
 * You must know by now, strings is what we call a list of characters, also known as - text.
 *
 * You can create a value of the string type by writting some text inside quotes.
 * Javascript supports 3 kinds of quotes:
 *   1. Single quotes: 'Tuti.js'
 *   2. Double quotes: "Tuti.js"
 *   3. Backticks: `Tuti.js`
 *
 * The first two (single quotes and double quotes) are simple, and there is no difference between them.
 * Why do we need two kinds of quotes which are functionally the same?
 * Well, having the two kinds of quotes is useful for when the string you need to represent itslef contains some quotes inside it.
 * The rule is you can use a single quote inside double quotes and vice versa. But not quotes of the same kind.
 *
 * Here, look at this:
 */
//export const singleInsideDouble = "My favorite movie is 'Back to the future'. What's yours?";
//export const doubleInsideSingle = 'My favorite food is "cherry" tomato. Whats is yours?';

/*
 * OK, this looks useful.
 * But wait, there's a problem. what about those single quotes before the 's' in the word "What's" in doubleInsideSingle?
 * How can I use the two kinds of quotes inside my text? Well don't worry there is always a way.
 * You can tell javascript that "the next character I type is just text, so leave it as is.. don't try to interpret it".
 * The way you do this is with a back-slash (\). So for a single quote you can do 'you\'re' which will be understood by JS as the string "you're".
 *
 * Try to add the single quote in the previous example (so doubleInsideSingle variable will be assigned the string "My favorite food is "cherry" tomato. What's is yours?" - with the ' in what's).
 *
 * Don't be lazy.. do it :)
 */

/*
 * Remember I said there are 3 kinds of string quotes in javascript?
 * The third one is backticks: `some text`.
 * Why have another one?? Well, this kind is different. It allows you build a string while embedding javascript code inside it!
 * I bet the last sentece wasn't clear at all. Let me explain with an example:
 */

const fikiBirthYear = 1983;
const tutiBirthYear = 1988;
const currentYear = 2020;
// export const fikiAndTutiAges = `It is now ${currentYear}. Tuti's age plus Fiki's age is ${2*currentYear - (fikiBirthYear + tutiBirthYear)} years!`;

/*
 * See what we did there?
 * Inside the backticks, you can wrapp any expression with a ${...}.
 * An expression in javascript is a peice of code that can be evaluated to a value. For example, the expression 2*3+5 can be evaluated to the value 11.
 * Inside the backticks, every expression you wrap with a ${...} is evaluted to a value and embedded inside your string.
 */

/*
 * Strings are important. Turns out representing text is pretty common in javasctipt.
 * The good news is we're done! that's all you need to know about strings... for now.
 * Let's move on!
 */

/*
 * --------------------
 *       Boolean
 * --------------------
 */

/*
 * Very simple, yet very very important. The Boolean type is used to represent "truth" values.
 * Some things are true (for example the statement "1 plus 1 is 2"), some things are false (for example the statement "Mel is a relaxing pet").
 * The boolean type has exactly 2 possible values. true and false. simple.
 */

const tutiIsCute = true;
const mathanIsCute = true;
const meliIsCute = false;

//export const everyoneAreCute = tutiIsCute && mathanIsCute && meliIsCute;
//export const someAreCute = tutiIsCute || mathanIsCute || meliIsCute;

/*
 * I know, I didn't tell you what are those strange looking && and ||.
 * Much like + or - is used to calculate some numbers, && and || are operators (see Operators chapter) for calculating truth values (or "booleans").
 * && meand a logical "and", while || is the logical "or".
 */

/*
 * can you guess the value before uncommenting?
 */
// export const trueOrFalse = ( (true || true) && (false && true) ) && true;

/*
 * --------------------
 *       Null
 * --------------------
 */

/*
 * The Null type has one single value - null.
 * It is usually used to represent an intentional missing value.
 */
//export const god = null;

/*
 * --------------------
 *       Undefined
 * --------------------
 */

/*
 * Yet another type with exactly one value - undefined.
 * Used to represent an unkown value. A variable which has the value 'undefined' is usually considered 'unassigned'. No one chose a value for the variable yet.
 * undefined is the default value of every variable you declared but did not assign any value to.
 */
//export let iDontKnowWhoIam;

/*
 * Interesting point: changing the 'let' above to 'const' will cause a complie-time error, because there is no reason to declare a constant without assigning it a value. Constants can only be assigned at declaration.
 */

/*
 * Interesting and confusing point: null and undefined both represent some non-value notion, however they ARE themselves completely normal VALUES.
 */

/*
 * --------------------
 *       Object
 * --------------------
 */

/*
 * You need to relax your mind a bit. Take a big breath...again... good. I love you. Let's continue.
 *
 * A value of type Object is a collection of named-values.
 * For example, a boy can be represented as an object with two named-values: a 'birthday' with the value "16/08/2019 and a 'cutenessLevel' of 10.
 *
 * An objet is denoted with curlybraces {...}.
 * Inside the curlybraces, you specify the values of the object and their names. The names of the values are often referred to as 'keys'.
 * So an object looks like: {someKey1: someValue1, someKey2: someValue2, ..., someKeyN: someValueN}
 *
 * Here's the example object described above:
 */

const mathan = { birthday: "16/08/2019", cutenessLevel: 10 };
//export {mathan};

/*
 * The simplest object is an object with no values (or keys) - the empty object denoted by a {}
 * Please note every object you define is unique. For example, in the following example the two objects are not the same one:
 */
const nothing = {};
const notAThing = {};

/*
 * You can use the === operator to check if two objects are actually the same one.
 *
 * Try to guess the value of the following variables:
 */
//export const mathanIsMathan = mathan ===  mathan;
//export const areWeTheSame = nothing === notAThing;

/*
 * Yep, you got it. Two objects are considered the same if and only if they are in fact ONE object. You can test for than with the === operator.
 *
 * Important!
 * While you can create multiple objects which look identical but are different instances, other types like number, string, boolean (also called 'primitive' types) are different.
 * Any two primitives with similar values are actually not two values, but ONE.
 * This is why "tuti" === "tuti" is true, but {} === {} is false.
 */

/*
 * Working with objects.
 * So we leared how to create objects. Now what?
 * There are two very useful things you can do with an object: access (read) its internal values, and modify (write) them.
 */

/*
 * The dot (.) notation:
 */
//export const mathanBirthday = mathan.birthday;

const circle = { radius: 77, x: 0, y: 0 };
//export const circleArea = circle.radius * circle.radius * 3.14;

/*
 * The dot notation is simple, but it has one big limitation: The name of the value (the 'key'), is static and needs to be known when writing the program.
 * For cases where you need a dynamic key that needs to be evaluted you can use the [] notation.
 *
 * Check out what you can do with the [] notation:
 */

//export const circleDiameter = circle["rad" + "ius"] * 2 * 3.14;

/*
 * --------------------
 *       Array
 * --------------------
 */

/*
 * Much like objects, an array is also a collection of values.
 * Unlike objects, the keys of an array are non-nagative integers.
 * Hence, the values of an array are numbered starting at 0. Then 1, then 2, ... you get the point.
 * The key of a value in an array is called its 'index'.
 *
 * Arrays are created using square brackets [].
 * Accessing values is with the [] notations. No 'dot' notation here.
 */

const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19];
//export const seventhPrime = primeNumbers[6];

/*
 * --------------------
 *       Date
 * --------------------
 */

/*
 * Since date is a relatively complicated type, we better discuss this in a later chapter.
 *
 * For now, let's have some fun trying to guess what's going on in the following lines:
 */

//export const milisecondsSine1970 = Date.now();
//export const mathanAgeInHours = Math.round((milisecondsSine1970 - new Date(2019, 8, 16).getTime()) / 1000 / 60 / 60);

/*
 * Take a few minutes to really try and guess what those scary things mean.
 * Remeber you can always try and 'export' something to help you understand.
 *
 * What's the deal with 1970 you ask? In most computer system time is represented by a number of time units (seconds, miliseconds, etc) since 01/01/1970.
 * See https://en.wikipedia.org/wiki/Unix_time for more details.
 */

/*
 * --------------------
 *       Function
 * --------------------
 */

/*
 * Functions deserves a whole chapter... let's move on to some puzzles!
 */

/*
 * Ready to get your hands dirty?
 */

/*
 * Representing geometry
 * ---------------------
 *
 * Imagine you are writing a GPS navigation system in JS (like Waze).
 * What kind of values would you need to represent in your program? Well you'll probably need to represents locations, routes, drivers, etc.
 *
 * For the sake of this exercise, we'll be focusing on places, locations and routes.
 * For simplisity sake, let's imagine a flat earth, so locations can be described by x,y coordinates (other than longitude and latitude).
 *
 * Here are a couple of places for example:
 */

const placeA = {
  name: "Tuti's home",
  address: "Adani Paz 48, Hadera",
  location: {
    x: 100,
    y: 80,
  },
};

const placeB = {
  name: "Gilboa",
  address: "mt. Gilboa",
  location: {
    x: 800,
    y: -140,
  },
};

/*
 * OK, not much so far. Just a couple places.
 * Places have a name, an address and a location object (yes, location is an object inside the place object).
 *
 * Let's start easy.
 * Write a peice of code for exctracting the 'x' coordinate of placeA to a variable named placeA_x.
 */

/* ---- your code here ----- */
const placeA_x = null;
/* ------------------------- */

//export {placeA_x};

/*
 * Great! let's continue.
 * What if you don't know whether you need the x, or y coordinate?
 *
 * Write a similar peice of code as before, only for exctracting a coordinate name stored in wantedCoordinate.
 */

const wantedCoordinate = "y";
/* ---- your code here ----- */
const placeA_coordinate = null;
/* ------------------------- */

//export const coordinateOfPlaceA = `The ${wantedCoordinate} coordinate is ${placeA_coordinate}`;

/*
 * Cool! Look at you programming in JS. What a nerd :) <3
 * You get a kiss!
 */

/*
 * Ready? Moving on.
 *
 * Write some code for calculating the distance between placeA and placeB!
 */

/* ---- your code here ----- */
const distanceFromAtoB = null;
/* ------------------------- */

//export {distanceFromAtoB};

/*
 * Awesome!
 * Next, let's build some routes!
 */

/*
 * A route is just a sequence of places.
 * An array seems like a resonable way to represent a route.
 * Let's create a short route - made of only 3 places.
 */

const placeC = {
  name: "Icecream place",
  address: "near mt. Gilboa",
  location: {
    x: 804,
    y: -138,
  },
};

/*
 * And a route...
 */

const dagansFamilyWeekendTrip = [placeA, placeB, placeC];

/*
 * Write some code for calculating the length of a route containing 3 places.
 */

/* ---- your code here ----- */
const totalRouteLength = null;
/* ------------------------- */

//export {totalRouteLength};

/*
 * I'm so proud of you! You are killing it!
 * You completed this chapter successfully - I promise you, beautiful things are coming.
 */

/*
 * %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
 * Congradulations!!! You've reached the end of the forth chapter.
 * %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
 */

/*
 * ----- What did I learn? ----------
 * Every value has a type. Javascript is a dynamically-typed language.
 * You learned about JS primitive types, and you now know how to work with objects and arrays!
 * ----------------------------------
 */

/* >>>>>> Next chapter: Operators >>>>>> */
