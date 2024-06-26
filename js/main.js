//forEach & .split()
// const favColors = "blue red green pink yellow";

// const favColorsArray = favColors.split(" ");

// favColorsArray.forEach((color) => {
//   console.log(`${color[0].toUpperCase()}${color.slice(1)}`, "<<<<< forEach");
// });

// let colorSplit = favColors.split(" ");

// for (let i = 0; i < colorSplit.length; i++) {
//   console.log(
//     colorSplit[i][0].toUpperCase() + colorSplit[i].slice(1),
//     "<<<<< for Loop"
//   );
// }

///////NUMBERS///////

//Number.parseInt()
//If variable starts with a letter, it will return NaN and if it starts with a number, it will only return the numbers that come before the letters and leave the rest out.

// const myNumber = "50dg64csd";

// let parsedNumber = Number.parseInt(myNumber);

// console.log(parsedNumber);

//Number.parseFloat()
//If the number contains a decimal, this is called a float number. When using parseFloat(), it will only return a decimal number if there's no letters before the deciaml point. If there are any letters after the deicmal point, these will not be included. If variable starts with a letter, it will return NaN.

// const numbers = "5.06f4asdc";

// let parsedNumbers = Number.parseFloat(numbers);

// console.log(parsedNumbers);

///////MATHS METHODS AND PROPERTIES///////

//Math.trunc(57.6); - Gets rid of any numbers after the decimal point - (57)
//Math.round(54.4); - rounds to the nearest whole number - (54)
//Math.ceil(77.2); - Always rounds up - (78)
//Math.floor(77.9)); - Always rounds down - (77)
//Math.random(); // - Generates a random number between 0-1 but not including 1(0.9------)

//Math.floor(Math.random() * 10 + 1)); - Generates a random number between 1-10. You add the + 1 so 0 isn't included in the generator. Don't use Math.ceil to generate random numbers as there is a chance 0 can be generated

//CHALLENGE 1 - Write code that will generate a random letter from my name

// let myName = "Muna Elmi";

// console.log(myName[Math.floor(Math.random() * myName.length)]);

///////IF STATEMENTS///////

//ROCK, PAPER, SCISSORS GAME

// let playerOne = ["✂️", "🗿", "📜"];

// let playerTwo = ["✂️", "🗿", "📜"];

// function dice() {
//   const playerOneGen = playerOne[Math.floor(Math.random() * playerOne.length)];
//   const playerTwoGen = playerTwo[Math.floor(Math.random() * playerTwo.length)];

//   let message;

//   if (playerOneGen === playerTwoGen) {
//     message = "Tie Game! 😱";
//     console.log(`${playerOneGen} V ${playerTwoGen} ${message}`);
//   } else if (playerOneGen === "🗿") {
//     if (playerTwoGen === "📜") {
//       message = "Player Two Wins! 🔥";
//       console.log(`${playerOneGen} V ${playerTwoGen} ${message}`);
//     } else {
//       message = "Player One Wins! 🏆";
//       console.log(`${playerOneGen} V ${playerTwoGen} ${message}`);
//     }
//   } else if (playerOneGen === "📜") {
//     if (playerTwoGen === "✂️") {
//       message = "Player Two Wins! 🔥";
//       console.log(`${playerOneGen} V ${playerTwoGen} ${message}`);
//     } else {
//       message = "Player One Wins! 🏆";
//       console.log(`${playerOneGen} V ${playerTwoGen} ${message}`);
//     }
//   } else {
//     if (playerTwoGen === "🗿") {
//       message = "Player Two Wins! 🔥";
//       console.log(`${playerOneGen} V ${playerTwoGen} ${message}`);
//     } else {
//       message = "Player One Wins! 🏆";
//       console.log(`${playerOneGen} V ${playerTwoGen} ${message}`);
//     }
//   }
// }

// dice();

///////SWITCH STATEMENTS///////
// Only check for strict comparisons

// let playerOne = "scissors";

// let playerTwo = "rock";

// switch (playerOne) {
//   case playerTwo:
//     console.log("Tie Game!");
//     break;
//   case "rock":
//     if (playerTwo === "paper") {
//       console.log("playerTwo Wins!");
//     } else {
//       console.log("playerOne Wins!");
//     }
//     break;
//   case "paper":
//     if (playerTwo === "scissors") {
//       console.log("playerTwo Wins!");
//     } else {
//       console.log("playerOne Wins!");
//     }
//     break;

//   default:
//     if (playerTwo === "rock") {
//       console.log("playerTwo Wins!");
//     } else {
//       console.log("playerOne Wins!");
//     }
//     break;
// }

///////TERNARY OPERATOR///////
// Syntax - condition ? ifTrue : ifFalse;

// let soup = "Chicken Noodle Soup";

// let response = soup ? `Yes, we have ${soup}` : `Sorry! No soup today.`;
// console.log(response);

// let soup;
// let isCustomerBanned = false;

// let soupAccess = isCustomerBanned
//   ? "No soup for you today"
//   : soup
//   ? `Yes we have ${soup}`
//   : "Sorry! No soup today :(";

// console.log(soupAccess);

// let testScore = 89;

// let grade =
//   testScore >= 90
//     ? "A"
//     : testScore >= 80
//     ? "B"
//     : testScore >= 70
//     ? "C"
//     : testScore >= 60
//     ? "D"
//     : "U";

// console.log(`My grade is a ${grade}`);

///////USER INPUT///////

///ALERT///
//alert("Hi Muna 👋🏽!");

///CONFIRM///
//Instructs the browser to display a dialog with an optional message, and to wait until the user either confirms or cancels the dialog.
// let myBoolean = confirm("Ready to enter the website?");

// console.log(myBoolean);

//let names = prompt("Please enter your name.");
//If not name is entered it will return null, so to make sure something has been entered you can use an if statement. E.G.
// if (names) {
//   console.log(names);
// } else {
//   console.log("You didn't enter a name");
// }

//You can also use the The nullish coalescing (??) - It is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

//console.log(names ?? "You didn't enter a name");

//////YOUR FIRST GAME//////

// let playGame = confirm("Shall we play rock, paper, scissors?");
// if (playGame) {
//   let playerChoice = prompt("Choose rock, paper or scissors");
//   if (playerChoice) {
//     let playerOne = playerChoice.trim().toLowerCase();
//     if (
//       playerOne === "rock" ||
//       playerOne === "paper" ||
//       playerOne === "scissors"
//     ) {
//       let computerChoice = Math.floor(Math.random() * 3 + 1);

//       let computer =
//         computerChoice === 1
//           ? "rock"
//           : computerChoice === 2
//           ? "paper"
//           : "scissors";

//       let result =
//         playerOne === computer
//           ? `playerOne: ${playerOne}\nComputer: ${computer}\n Tie game!`
//           : playerOne === "rock" && computer === "paper"
//           ? `PlayerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins 🏆!`
//           : playerOne === "paper" && computer === "scissors"
//           ? `PlayerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins 🏆!`
//           : playerOne === "scissors" && computer === "rock"
//           ? `PlayerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins! 🏆`
//           : `PlayerOne: ${playerOne}\nComputer: ${computer}\nPlayerOne Wins 🏆!`;

//       console.log(result);
//     } else {
//       alert("You didn't choose rock, paper or scissors");
//     }
//   } else {
//     alert("I guess you changed your mind! Maybe next time.");
//   }
// } else {
//   alert("Ok, maybe next time!");
// }

///BUILDING FROM MEMEORY/////
// let readyToPlay = confirm("Shall we play rock, paper or scissors?");

// if (readyToPlay) {
//   let playersChoice = prompt("Choose rock, paper or scissors");
//   if (playersChoice) {
//     let playerOne = playersChoice.trim().toLowerCase();
//     if (
//       playersChoice === "rock" ||
//       playersChoice === "paper" ||
//       playersChoice === "scissors"
//     ) {
//       let computerChoice = Math.floor(Math.random() * 3 + 1);

//       let computer =
//         computerChoice === 1
//           ? "rock"
//           : computerChoice === 2
//           ? "paper"
//           : "scissors";

//       let result =
//         playerOne === computer
//           ? `PlayerOne: ${playerOne}\nComputer: ${computer}\nTie Game!`
//           : playerOne === "rock" && computer === "paper"
//           ? `PlayerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins! 🏆`
//           : playerOne === "paper" && computer === "scissors"
//           ? `PlayerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins! 🏆`
//           : playerOne === "scissors" && computer === "rock"
//           ? `PlayerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins! 🏆`
//           : `PlayerOne: ${playerOne}\nComputer: ${computer}\nPlayerOne Wins! 🏆`;

//       alert(result);
//       let playAgain = confirm("Play Again?");
//       playAgain ? location.reload() : alert("Ok, thanks for playing!"); //Allows you to reload the page to play again
//     } else {
//       alert("You didn't choose rock, paper or scissors.");
//     }
//   } else {
//     alert("Looks like you changed your mind 👀");
//   }
// } else {
//   alert("Ok, maybe next time! 🤷🏽‍♀️");
// }

///EMOJI PICKER//
//<h1>Choose your Emoji</h1>
//      <div id="emojiDisplay"></div>
//     <br />
//     <button id="emojiPicker">Choose an emoji</button>

// const emojiPicker = document.getElementById("emojiPicker");
// const emojiDisplay = document.getElementById("emojiDisplay");

// let emojis = ["🦒", "🦦", "🦧", "🐅", "🐀", "🐊", "🐓", "🐢", "🐙", "🐍"];

// let playerOne;

// let computer;

// emojiPicker.addEventListener("click", function () {
//   const playerOneEmoji = Math.floor(Math.random() * emojis.length);
//   const computerEmoji = Math.floor(Math.random() * emojis.length);

//   playerOne = emojis[playerOneEmoji];
//   computer = emojis[computerEmoji];

//   emojiDisplay.textContent = `${playerOne} V ${computer}`;
// });

/////FUNCTIONS/////
// - provide reuseable code. you can define blocks of code and call them when you need them.

//Function declaration
// function getUserEmailAddress(email) {
//   return email.slice(0, email.indexOf("@"));
// }

// console.log(getUserEmailAddress("helloworld@gmail.com"));

//Arrow function
// const getUserNamefromEmail = (email) => {
//   return email.slice(0, email.indexOf("@"));
// };

// console.log(getUserNamefromEmail("heyMuna@gmail.com"));
