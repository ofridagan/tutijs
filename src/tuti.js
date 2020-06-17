/*
 * ########################################  
 *                 tuti.js
 * ########################################  
 *
 *  Every value/function you export in this file will be displayed on the page...
 *  Have Fun!
 */




// ----------------------------------------  
// Examples (add your code above so it will be on top)
// ----------------------------------------  

// just a string value
export const first = "I Love You";

// a function with no arguments the just return value
export const second = () => "Tuti";

// a function with a body
export const third = () => {
    const fiveVery = [1,2,3,4,5].map(() => "Very");
    return fiveVery.join(" ") + " Muchy";
}
