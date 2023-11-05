// Prison Break Challenge
// GitHub: https://www.github.com/KharlAbban
//Return the number of freed prisoners

let PRISON = [1,1,0,0,0,1,0];
let freedPrisoners = 0;

// Starting Logic
// Loop through the array. During loop, invert the PRISON array w/ a function if value there is 1
// Else continue the loop (skip this iteration)
// NB: Continue without starting over from first index
// Rule: If 1, unlocked - free prisoner(freedPrisoners+=1); if 0, locked - skip cell and invert array

//Main Program Loop

for (let i=0;i < PRISON.length;i++) {
    if (PRISON[i] == 0) continue;
    freedPrisoners++;
    PRISON = arrayInvert(PRISON);

    // Log to test if array was actually inverted
    // console.log(`First Item of inverted at ${i}: `, PRISON[0]);
}

console.log(`Freed prisoners: ${freedPrisoners}`);


// Function to invert PRISON array
function arrayInvert (prisonArray) {
    // Log current array input
    // console.log(prisonArray);

    for (let index = 0; index < prisonArray.length; index++) {
        prisonArray[index] = (prisonArray[index] == 0) ? 1 : 0;
    }
    return prisonArray;
}

// Log inverted array for debugging
// console.log("Test Print of Inverted Array: ", PRISON);