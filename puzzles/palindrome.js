
const isPalindrome = (numberAsString) => {
    return (
        numberAsString ===  numberAsString
        .split('')
        .reverse()
        .join('')
        ? 'Palindrome'
        : 'Not palindrome'
    )
}

console.log(isPalindrome('002343200'));

/**
 * 10001
 * 12345
 * 21312
 */