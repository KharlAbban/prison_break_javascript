# Prison_Break_Javascript
Returns the number of freed prisoners in a unique prison arrangement

## Rule
A 1 means an unlocked cell, a 0 is a locked cell.
Prisoners can only be freed if their cell is unlocked.

## Main Idea For Program
The program consists of a for loop iterating for the length of the PRISON array.
First, the current cell is checked to see if it is unlocked.
If it is, the prisoner is freed, the freedPrisoners variable is updated and the PRISON array is inverted.
If not, the current iteration is skipped, i.e, we check the next cell.

### Conclusion
At the end of the program, we print out the number of freed prisoners.

### NB
A separate function, arrayInvert, is used to inverted the current array.

Console logs have been commented out and can be uncommented for use as debugging helpers.