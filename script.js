/*++++++++++++++++++++++++++++++++++++++++
COMM644
Assignment 2, Part 1   STRINGS
++++++++++++++++++++++++++++++++++++++++*/


// STEP 1		*
/*Create an application that prompts the user for their name. Then, find the length of characters in the person’s name.  Use the alert method to display the result.*/


/*
var yourName = window.prompt("What is your name?");
window.alert("Your name is " + yourName.length + " characters long.");
*/

// STEP 2		*
/*Create an application that prompts the user for their name. Then, prompt the user for a numeric value so that they can find the letter in the string based on the number they specify. Use the alert method to display the result.*/


/*
var yourName = window.prompt("What is your name?");
var charNo = window.prompt("Enter a single digit less than the length of your name.");
window.alert("Character number " + charNo + " in your name is " + yourName.charAt(charNo));
*/

// STEP 3		*
/*Create an application that prompts the user for their first name. Then, prompt the user for their last name using a second prompt. Use the alert method to display the text "Your name is: " along with the result of the first name and last name concatenated together. You will use a concatenation operator to concatenate the literal string with the result of the String object method’s result.*/


/*
var firstName = window.prompt("Enter your first name");
var lastName = window.prompt("Enter your last name");
var fullName = firstName + " " + lastName;
window.alert("Your name is: " + fullName);
*/

// STEP 4		*
/*Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, find and display within an alert the index of the word “fox”.*/


/*
var foxyDog = "The quick brown fox jumps over the lazy dog";
window.alert(foxyDog.indexOf("fox"));
*/

// STEP 5		*
/*Create an application that stores the text “The quick brown fox jumps over the lazy fox” within a variable. Then, find and display within an alert the index of the last instance of the word “fox”.*/

/*
var foxyDog = "The quick brown fox jumps over the lazy fox";
window.alert(foxyDog.lastIndexOf("fox"));
*/

// STEP 6		*
/*Create an application that stores the text “The quick brown fox jumped over the lazy dog” within a variable. Then, prompt the user for their full name. Then, replace the text “the lazy dog” in the variable with the name that the user enters within the prompt. Use the alert method to display the result.*/

/*
var foxyDog = "The quick brown fox jumps over the lazy dog";
var yourName = window.prompt ("What is your name?")
window.alert(foxyDog.replace(/the lazy dog/g, yourName));
*/

//STEP 7        *
/*Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, prompt the user for a word. Next, search for the word within the string that the user enters into the prompt. Use the alert method to display the result.*/

/*Zac's response: You're thinking too much into this. The user is prompted to search for a word. The user enters a word within the prompt and then you search the string "The quick brown fox jumps over the lazy dog" to see if the word they're searching for exists within that string of text. THAT'S NOT WHAT IT SAYS!*/


/*
var foxyDog = "The quick brown fox jumps over the lazy dog";
var word = window.prompt ("Type in a word.");
console.log("Your word was " + "\"" + word + "\"");
var n = foxyDog.search(word);
// window.alert("Your word was " + "\"" + word + "\"" + " and it was located at position " + n);
window.alert(n >= 0);
*/

//STEP 8		*
/*Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable called old_string. Then, use slice(), substr(), or substring() to extract the words “the lazy dog” from the old_string variable and store that result in a second variable called new_string. Use the alert method to display the uppercase result of new_string.
*/

/*
var oldString = "The quick brown fox jumps over the lazy dog";
var newString = oldString.slice(31, 43);
window.alert(newString.toLocaleUpperCase());
*/

//STEP 9		*
/*Create an application that stores the text “            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ” within a variable. Make sure to add space before and after the text so that appears very similar to the text here. Use the alert method to display the lowercase result of the variable once the space has been trimmed off.*/

/*
var doggie = "            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
var shortDog = (doggie.trim());
window.alert(shortDog.toLocaleLowerCase());
*/

//STEP 10		* 		
/*Create an application that stores the text “the quick brown fox jumps over the lazy dog” within a variable. The user clearly forgot to capitalize the first letter in the sentence. Programmatically capitalize the first letter in the sentence and display the result in an alert.*/


/*
var foxyDog = "the quick brown fox jumps over the lazy dog";
window.alert(foxyDog.charAt(0).toUpperCase() + foxyDog.slice(1, 43));
*/


/*++++++++++++++++++++++++++++++++++++++++
COMM644
Assignment 2, Part 2.1     MATH
++++++++++++++++++++++++++++++++++++++++*/

/*STEP 1 		*
Create an application that prompts the user for a number. Regardless of whether they enter a negative or positive number, make sure to display the positive version of that number in the console window. If I enter -15 in the prompt and -15 is displayed in the console window, you did this one wrong.*/

/*
var absNum = window.prompt("Enter positive or negative number");
window.alert("The absolute value of your number is " + Math.abs(absNum));
*/
                           
/*STEP 2		*
Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it up to the nearest whole number. Display the result within a console window.*/

/*
var floated = window.prompt("Enter a floating point number");
window.alert("The next whole number is " + Math.ceil(floated));
*/



/*STEP 3		*
Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it down to the nearest whole number. Display the result within a console window.*/

/*
var floated = window.prompt("Enter a floating point number");
window.alert("The next lower whole number is " + Math.floor(floated));
*/

/*STEP 4.       *
Create an application that prompts the user for 5 numbers. Ask them to comma delimit each number so you get 1,2,3,4,5 for example. Store the result of that input in a variable and then find the largest and smallest numbers in that list. Display both of those numbers within a console window.*/

/*
var strNums = window.prompt("5 numbers with commas between them");
arrNums = strNums.split(","); //returns an array from strNums
                            // console.log(arrNums);
     var var1 = parseInt(arrNums[0]); 
     var var2 = parseInt(arrNums[1]);
     var var3 = parseInt(arrNums[2]);
     var var4 = parseInt(arrNums[3]);
     var var5 = parseInt(arrNums[4]); 
console.log("Highest number is " + Math.max(var1,var2,var3,var4,var5));

*/

/*STEP 5		*
Create an application that prompts the user for a number. Now find the square root of that number and display the result within a console window.*/


/*
var sqrNum = window.prompt("Enter a number.");
console.log("The square root of " + sqrNum + " is " + Math.sqrt(sqrNum));
*/

/*++++++++++++++++++++++++++++++++++++++++
COMM644
Assignment 2, Part 2.2      DATES
++++++++++++++++++++++++++++++++++++++++*/

/*STEP 6		*
Create an application that gets the current date. Display that result within the console window.*/

/*
var day = new Date();
console.log(day.getMonth() + "/" + day.getDate());
*/


/*STEP 7  		*
Create an application that gets the number of days in a month. Display that result within the console window. Comment: use getCurrentMonth with a  switch using 12 cases to console out how many days. */
        
/*
var month;
switch (new Date().getMonth()) {
    case 0:
        month = "31"; //Jan
        break;
    case 1:
        month = "28"; //Feb
        break;
    case 2:
        month = "31"; //Mar
        break;
    case 3:
        month = "30"; //Apr
        break;
    case 4:
        month = "31"; //May
        break;
    case 5:
        month = "30"; //Jun
        break;
    case 6:
        month = "31"; //Jul
        break;
    case 7:
        month = "31"; //Aug
        break;
    case 8:
        month = "31"; //Sep
        break;
    case 9:
        month = "31"; //Oct
        break;
    case 10:
        month = "30"; //Nov
        break;
    case 11:
        month = "31"; //Dec
        break;
}
console.log("This month has " + month + " days");
*/




/*STEP 8        *
Create an application that gets the month name from a particular date. Display that result within the console window.*/

/*
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var d = new Date();
console.log("This is " + months[d.getMonth()]);
*/

/*STEP 9     *  
Create an application that tests whether a date is a weekend. Display that result within the console window.*/

// METHOD 1 

/*   
var d = new Date().getDay(); 
var w;
if (d == (0 || 6)) {
    w = "weekend day";
} else {
    w = "weekday";
}
console.log("Today is a " + w);
*/

// STEP 9    METHOD 2

/*
var d = new Date();
var w;
switch (d.getDay()) {
    case 0:
        w = "weekend day"; 
        break;
    case 1:
        w = "weekday"; 
        break;
    case 2:
        w = "weekday"; 
        break;
    case 3:
        w = "weekday"; 
        break;
    case 4:
        w = "weekday"; 
        break;
    case 5:
        w = "weekday"; 
        break;
    case 6:
 		w = "weekend day";
        break;
}
console.log("Today is a " + w);
*/

// STEP 9    METHOD 3

/*
switch (new Date().getDay()) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
       text = "weekday.";
        break; 
    case 0:
    case 6:
       text = "weekend.";
}
console.log("Today is a " + text);
*/






/*STEP 10		*   
Create an application that gets yesterday’s day of the week. For instance, if today is Tuesday, the console window should display Monday.*/

// Another way would be to create a var using getDay, subtract 1 then use normal day names, rather than artificially offsetting the correlation of the day number to the day name.

/*
var d = new Date();
var y;
switch (d.getDay()) {
    case 0:
        y = "Saturday"; 
        break;
    case 1:
        y = "Sunday"; 
        break;
    case 2:
        y = "Monday"; 
        break;
    case 3:
        n = "Tuesday"; 
        break;
    case 4:
        n = "Wednesday"; 
        break;
    case 5:
        n = "Thursday"; 
        break;
    case 6:
 		n = "Friday";
        break;
}
console.log("Yesterday was " + n);
*/


// STEP 10 		Alternate method, could also use an array

/*
var d = new Date();
var weekday = new Array(7);
weekday[0] = "Saturday";
weekday[1] = "Sunday";
weekday[2] = "Monday";
weekday[3] = "Tuesday";
weekday[4] = "Wednesday";
weekday[5] = "Thursday";
weekday[6] = "Friday";

var n = weekday[d.getDay()];
console.log("Yesterday was " + n);
*/


/*STEP 11		*
Create an application that gets the current day of the week. The twist here is that I want only the first letter of the day. If today is Tuesday, the letter T should be displayed in the console window.*/


/*
var d = new Date();
var n;
switch (d.getDay()) {
    case 0:
        n = "S"; 
        break;
    case 1:
        n = "M"; 
        break;
    case 2:
        n = "T"; 
        break;
    case 3:
        n = "W"; 
        break;
    case 4:
        n = "T"; 
        break;
    case 5:
        n = "F"; 
        break;
    case 6:
 		n = "S";
        break;
}
console.log("Today's name starts with \"" + n + "\"");
*/


/*++++++++++++++++++++++++++++++++++++++++
COMM644
Assignment 2, Part 2.3      Conditional Logic and Looping Operations    
(4 points)
++++++++++++++++++++++++++++++++++++++++*/

//STEP 12		*
// Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the console window.


/*
var no1 = window.prompt("Enter an integer");
var no2 = window.prompt("Enter another integer");
no1 >= no2 ? console.log("The larger number is " + no1) : console.log("The larger number is " + no2);
*/



//STEP 13		*
/*Create an application that records the marks for the following five students. Then, these marks are used to determine the corresponding grade. All 5 students and their grades should be displayed within the console window.*/

/*
var grade = "";
var range = "";
var mark = "";
var studentMarks = {"Ursula" : 80, "Paul" : 77, "Henry" : 88, "Tabitha" : 95, "Lucy" : 68};

for (var mark in studentMarks) {

    if (studentMarks[mark] < 60) {
        grade = "F";
    } else if (studentMarks[mark] < 70) {
        grade = "D";
    } else if (studentMarks[mark] < 80) {
        grade = "C";
    } else if (studentMarks[mark] < 90) {
        grade = "B";
    } else if (studentMarks[mark] < 100) {
        grade = "A";
    }
    
  console.log(mark + " got " + studentMarks[mark] + ": " + grade );
}
*/


/*
Student Name
Marks
Ursula
80
Paul
77
Henry
88
Tabitha
95
Lucy
68


The grades are computed as follows:


Range
Grade
<60
F
<70
D
<80
C
<90
B
<100
A
*/

//________________________________________________
//STEP 14		*
/*Create a JavaScript for a loop that iterates from 1 to 15. Each iteration should check if the current number is odd or even, and display a message within the console window.*/


/*
for (var i = 1; i <= 15; i++) {
(i%2 == 0) ? console.log(i + " is even" ) : console.log(i + " is odd");
}
*/




//________________________________________________
//STEP 15		*
/*Create an application which iterates numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number and for multiples of 5, print "Buzz" instead of the number. For numbers which are multiples of both 3 and 5 print "FizzBuzz". This is a VERY common JavaScript interview question and you should know how to do this. You will need to take advantage of the modulus operator to accomplish this task.*/

// NOTE TO SELF: had to put broader case (operation with &&) before others. Why is that? Why does it not work the other way - ie putting i, then "buzz" and "fizz" then "fizzbuzz"?

/*
for (var i = 1; i <= 100; i++) {
	 
	if (i%5 == 0 && i%3 == 0) {
		console.log("FizzBuzz");
	} else if (i%3 == 0) {
		console.log("Fizz");
	} else if (i%5 == 0) {
		console.log("Buzz");  
	} else {
		console.log(i)
	}
}
*/



/*++++++++++++++++++++++++++++++++++++++++
COMM644
Assignment 2, Part 2.4 - “Hitchhiker’s Guide to the Galaxy” Game 	*
(5 points)
++++++++++++++++++++++++++++++++++++++++*/
/*1. Begin your application by asking the user if they’re ready to play your game. If they are, display the message “Awesome, our hero is waiting!”  If they’re not, display the message “Too bad, we’re going to play anyway because our hero desperately needs your help!” You will need to use the confirm box for this one and check for the Boolean result of clicking OK or Cancel.

2. Now, alert the user to the following scenario: “You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…”

3. Then prompt the user with the following message: “Which direction would you like to head (please enter forward, left, or right).”

4. Use a switch statement to check for the literal string values forward, left, and right. If they choose forward, display the message “You walk about 100 yards and safely make your way out of the cave.” If they choose left, display the message “Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.” If they choose right, display the message “You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.” If the user chooses anything other than those three values, display the message “The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.”

5. Finally, ask the user to rate your game on a scale of 1 to 10. If the feedback score is between 6 and 10, display the message “Thank you, we will continue to make improvements to the game!” If the feedback score is between 1 and 5, display the message “Whatever, you weren’t very good at this game anyway!”

6. Before you evaluate the number that the user has entered, check to see if the user entered a valid numeric value between 1 and 10. If they don’t, default the value to 10 and proceed with the evaluation.
*/



/*

//STEP 1
var x;
if (confirm("Are you ready to play?") == true) {
    x = window.alert("Awesome, our hero is waiting!");
} else {
    x = window.alert("Too bad, we’re going to play anyway because our hero desperately needs your help!");
}
//STEP 2
window.alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…");

//STEP 3
var direction = window.prompt("Which direction would you like to head? (please enter forward, left, or right).");
console.log(" You went " + direction); // logs direction they went of what they entered 


//STEP 4   
switch (direction) {  
	case "forward":
		text = ("You walk about 100 yards and safely make your way out of the cave. You are still alive. Go have a beer!");
		break;
	case "left":
		text = ("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown. A bad day, but you don't care because you are dead.");
		break;
	case "right":
		text = ("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever. Bummer!");
		break;
	default :
		text = ("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.");
}
window:alert(text);


//STEP 5 
var rating = window.prompt("Please rate the game on a scale of 1 to 10.");
console.log(" You rated this " + rating);   // logs result of what they entered 


// STEP 6
var text;
switch (Number(rating)) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:    
        text = "Whatever. You weren’t very good at this game anyway!"; 
        break;
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    default:
        text = "Thank you, we will continue to make improvements to the game!";
        
}
    window.alert(text);


*/


/*++++++++++++++++++++++++++++++++++++++++
COMM644
Assignment 2, Part 2.5 - Coin Flip Game   		*
(5 points)
++++++++++++++++++++++++++++++++++++++++*/

//STEP 1
/*Begin your application by creating a variable called coinFlip and set it equal to a random number. You will have to use a Math method to get this number.*/
/*STEP 2
Prompt the user to select “Heads or Tails” and set the result to a new variable called choice.*/
/*STEP 3
Use a conditional to check the result of the coin flip. If it’s less than a certain number, it will be heads. If it’s greater than a certain number, it will be tails.*/
/*STEP 4
If the result is heads and the user selects heads, display the following message within an alert: 
The flip was heads and you chose heads...you win!*/
/*STEP 5
If the result is heads and the user selects tails, display the following message within an alert: 
The flip was heads but you chose tails...you lose!*/
/*STEP 6
If the result is tails and the user selects heads, display the following message within an alert: 
The flip was tails but you chose heads...you lose!*/
/*STEP 7
If the result is tails and the user selects tails, display the following message within an alert: 
The flip was tails and you chose tails...you win!*/

/*
// STEP 1
var coinFlip = (Math.random());
	// console.log(coinFlip);
	// console.log(Math.pow(10, 10));

// STEP 2
var choice = window.prompt("Heads or Tails");
	// console.log(choice);

// STEPS 3-7
if (choice == "heads" && coinFlip <= 0.5) {  
    window.alert("The flip was heads and you chose heads...you win!");
} else if (choice == "tails" && coinFlip <= 0.5)  {  
    window.alert("The flip was heads but you chose tails...you lose!");
} else if (choice == "tails" && coinFlip > 0.5)  {
    window.alert("The flip was tails and you chose tails...you win!");
} else if (choice == "heads" && coinFlip > 0.5)   {
    window.alert("The flip was tails but you chose heads...you lose!");
} else {
    window.alert("The coin only has two sides, and \"" + choice + "\" was not one of them. Try again.");
}
*/

/*STEP 8		*
 Use two Math methods to get a solid whole number on the coin flip. Modify the evaluation of the expression in your conditional so that it now checks for a Boolean result.*/   

/*
var p;
var coinFlip = Math.floor(Math.random() * 10001);  
	console.log(coinFlip);								// log result
coinFlip <= 5000 ? p = "HEADS" : p = "TAILS";
	console.log(p); 									// log result
var choice = prompt("Heads or Tails?");
	console.log(choice.toUpperCase()==p);	
*/



/*++++++++++++++++++++++++++++++++++++++++
COMM644
Assignment 2, Part 2.7 - The “Coin Flip Streak” Game 		*
(5 points)
++++++++++++++++++++++++++++++++++++++++*/
/*1. Begin your application by declaring a variable called coinFlip. Do not assign the variable a number just yet.*/
/*2. Create a do while loop.*/
/*3. Within the do while loop assign a randomly generated number to coinFlip. You will have to use a Math method to get this number. Also, make sure to round that number off so that you get either a 0 or 1 as the result.*/
/*4. Use a conditional to check the result of the coin flip. If it’s 0, write out “Heads” into the console window. If it’s 1, write out “Tails” into the console window.*/
/*5. Set the condition of the do while loop to end once the coinFlip becomes “Tails”.*/

/*	
var coinFlip, i = 0, side; 						
do {
	i++;									//counter
	coinFlip = (Math.random()); 			//STEP 2 generate the flip
	headsTails = (Math.round(coinFlip)); 	//STEP 3 convert to 0 or 1 
	if (headsTails == 0) {					//STEP 4 convert to heads or tails
		 side = "heads";
		 console.log("Flip #" + i + " was " + side);
	} else {
		side = "tails";
	}
			
} while (side != "tails"); 					//STEP 5 stop
		console.log("You had " + (i - 1) + " heads before getting tails.") 
*/



/*++++++++++++++++++++++++++++++++++++++++
COMM644
Assignment 2, Part 2.8 - Looping a Triangle 		*
(5 points)
++++++++++++++++++++++++++++++++++++++++*/
/*Write a loop that displays the following triangle within a console window:
#
##
###
####
#####
######
#######
*/

// create an empty var, loop to put in a #. Each time it iterates, it adds another # until done. Use +=, not .

/*
var hash = ""
for (var i = 1; i <= 7; i++) {
console.log(hash += "#");
}
*/

/*++++++++++++++++++++++++++++++++++++++++
COMM644
Assignment 2, Part 2.9 - Odd or Even?  				*
(5 points)
++++++++++++++++++++++++++++++++++++++++*/
/*Write a loop that will iterate from 0 to 15. For each iteration it will check if the current number is odd or even, and display a message in the console window.
Sample Output:
"0 is even" 
"1 is odd" 
"2 is even"*/

/*	
for (var i = 0; i <= 15; i++) {
	if (i%2 == 0) { 
		console.log("\"" + i + " is even\""); 
	} else {
		console.log("\"" + i + " is odd\"");
	}
}
*/
