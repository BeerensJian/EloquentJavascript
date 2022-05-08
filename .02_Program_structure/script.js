// Exercise 1: Looping a Triangle
x = ""
while ( x.length < 6) {
    x = x + "#"
    console.log(x)
}

// Exercise 2: FizzBuzz
for (let i = 1; i <= 100; i++) {
    if ( i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz")
    } else if ( i % 3 == 0 ) {
        console.log("Fizz")
    } else if ( i % 5 == 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}

// Exercise 3: Chessboard
let size = 8;
let row = "";
for (let i = 0; i < size; i++) {

    if (row.startsWith("#")) {
        row = ""
        for (let z = 0; z < size ; z++) {
            if ( z % 2 == 0) {
                row = row + "0";
            } else {
                row = row + "#";
            }
        }
    } else {
        row = ""
        for (let z = 0; z < size ; z++) {
            if ( z % 2 == 0) {
                row = row + "#";
            } else {
                row = row + "0";
            }
        }
    }
    
    console.log(row)
}
