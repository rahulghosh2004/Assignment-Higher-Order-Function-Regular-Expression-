/*
1. Reverse String.
The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay
of 2 seconds. The program should use a variable “input” storing a string as input and then implement a delay of
2 seconds before reversing the string. The reversed string should then be printed as output.
*/

function reverseString(str) {
    return str.split('').reduce((reversedString, char) => char + reversedString, '');
}

let originalString = "Pw Skills";
let reversedString = reverseString(originalString);
console.log(reversedString);




/*
2. Random Number Generator with Delay and Progress Indication:
The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a
variable so can be modified. The program displays a message every second indicating the time remaining
until the random number is generated and then outputs the generated number.
*/

let delayInSeconds = 3;

function generateRandomNumberWithDelay(delay) {
    let countdown = delay;

    let countdownInterval = setInterval(function () {
        console.log("Time remaining: " + countdown + " seconds");
        countdown--;

        if (countdown < 0) {
            clearInterval(countdownInterval);
            let randomNumber = Math.floor(Math.random() * 100);
            console.log("Random number generated: " + randomNumber);
        }
    }, 1000);
}

generateRandomNumberWithDelay(delayInSeconds);


/*
3. Build a feature for Store's Inventory.
Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should
use the map higher-order function to create a new object with the converted prices in Rupees.
*/

let inventory = {
    "item1": 10,
    "item2": 20,
    "item3": 30,
};

let exchangeRate = 80;

let convertedInventory = Object.keys(inventory).reduce(function (result, key) {
    result[key] = inventory[key] * exchangeRate;
    return result;
}, {});

console.log(convertedInventory);



/*
4. Filtering and Capitalizing: Books Published After 2010 with Author Names.
Write a program that takes a list of books, including their authors and publication years as input. The program
should then filter out all books that were published before 2010 and create a new array with the remaining
books, but with their author names capitalized.
*/

let books = [
    { title: "Book 1", author: "author 1", year: 2005 },
    { title: "Book 2", author: "author 2", year: 2012 },
    { title: "Book 3", author: "author 3", year: 2008 },
    { title: "Book 4", author: "author 4", year: 2015 },
];

let filteredBooks = books
    .filter(function (book) {
        return book.year >= 2010;
    })
    .map(function (book) {
        return {
            title: book.title,
            author: book.author.toUpperCase(),
        };
    });

console.log(filteredBooks);


/*
5. URL validation.
Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://,
followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters.
Print a message indicating if the input matches the conditions or not.
*/

function validateURL(url) {
    let regex = /^(http:\/\/|https:\/\/)[a-zA-Z0-9-_]+(\.[a-zA-Z]+)+$/;

    if (regex.test(url)) {
        console.log("The URL is valid.");
    } else {
        console.log("The URL is not valid.");
    }
}

validateURL("http://www.example.com");
validateURL("http://12345.com");
validateURL("https://example");
validateURL("ftp://www.example.com");



/*
6. LinkedIn Profile URL Validator.
As a developer, you want to create a program that validates LinkedIn profile URLs to ensure that they are
formatted correctly and contain only valid characters. Valid LinkedIn profile URLs should start with https://
www.linkedin.com/in/ followed by a combination of one or more letters, digits, underscores, or hyphens, and
end with a letter or digit. The length of the profile ID should be between 5 and 30 characters.
The program should use a regular expression to match valid LinkedIn profile URLs, and should not match URLs
that do not follow this format or contain invalid characters. The program should provide clear output messages
indicating whether each input is a valid LinkedIn profile URL or not.
*/

function validateLinkedInURL(url) {
    let regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

    if (regex.test(url)) {
        console.log("The LinkedIn profile URL is valid.");
    } else {
        console.log("The LinkedIn profile URL is not valid.");
    }
}
validateLinkedInURL("https://www.linkedin.com/in/johndoe");
validateLinkedInURL("https://www.linkedin.com/in/john_doe123");
validateLinkedInURL("https://www.linkedin.com/in/john-doe");
validateLinkedInURL("https://www.linkedin.com/in/john.doe");
validateLinkedInURL("https://www.linkedin.com/in/john_doe_");
validateLinkedInURL("https://www.linkedin.com/in/johndoe12345");
