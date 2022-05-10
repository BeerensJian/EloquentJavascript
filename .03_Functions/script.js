// Exercise 1: Minimum
const min = (n1, n2) => {
    if ( n1 > n2) {
        return n2;
    } else if (n2 > n1) {
        return n1;
    }
    return n1
}
// console.log(min(5, 5));

// Exercise 2: Recursion

const isEven = (number) => {
    if ( number === 1) {
        return "odd";
    } else if (number === 0) {
        return "even";
    } else {
        return isEven(number - 2)
    }
}

console.log(isEven(99))

//Exercise 3: Bean Counting ( Growing functions )

const CountLetter = (word, letter) => {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if ( word[i] === letter ) {
            count = count + 1;
        }
    }
    return count;
}

const countB = (word) => {
    CountLetter(word, "B")
}

console.log(countB("Paddy the BBBaDDyy"))