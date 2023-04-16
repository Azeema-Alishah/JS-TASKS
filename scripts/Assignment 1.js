//***************************[BQ TASKS]*******************************//

                     //       TASK 1 ZAKAAT       //

var ZakaatPercentage = 0.025
var userInput = prompt("Enter number to calculate Zakaat: ");
var result  = ZakaatPercentage * Number(userInput);
console.log(result)
alert("Your Zakaat value is: "+ result);
          
          
                     //       TASK 2 FITRA      //
          
var wheat = "Wheat"
var raisin = "Raisin"          
var oats = "Oats"          
var dates = "Dates"          
var familyMembers = Number(prompt("Total Family Members:"))
var fitra_method = prompt("Choose fitra method from: Wheat = 250Rs , Oats = 450Rs , Dates = 2100Rs or Raisin = 2800Rs")
 if(fitra_method == wheat){
              alert("Your fitra amount is "+ 250*familyMembers)
 } else if(fitra_method == oats){
              alert("Your fitra amount is "+ 450*familyMembers)
 } else if(fitra_method == dates){
               alert("Your fitra amount is "+ 2100*familyMembers)
} else if(fitra_method == raisin){
               alert("Your fitra amount is "+ 2800*familyMembers)
          }
          
          
                     //       TASK 3 Secret No.      //
          
var secretNumber = 3
var guessNumber = prompt("Guess the Secret No. from a Range of 1-10:")
          console.log(secretNumber)
if ( guessNumber == secretNumber)
              {alert("Congatulations! You have guessed the secret no")}
          
else if (guessNumber > secretNumber )
                 {alert("Incorrect! Guess is too high, please try again")}
          
if (guessNumber < secretNumber )
                 {alert("Incorrect! Guess is too low, please try again")}
          
          
                    //       TASK 4 Capitalized Case Name      //
          
var name = prompt("Your Name:")
let first_letter = name.slice(0,1)
alert("Your name with first letter capitalized: "+ first_letter.toUpperCase()+name.slice(1,))


                   //     Task 5 Contact Number and Name       //

const contactNumber = []
const contactNames = []
var contacts = Number(prompt("How many contacts you want to add: "))
for(i = 0 ; i < contacts ; i++){
   var name = prompt("Enter contact name: ")
   var number = Number(prompt("Enter mobile no. : "))
   contactNames.push(name)
   contactNumber.push(number)
}
console.log(contactNames)
console.log(contactNumber)


                  //     Task 6 Array Item Removal       //

const products = ["Ferarri" , "Mercedes" , "Tesla" , "Lamborghini", "BMW" , "Audi" , "Bugatti"];
var itemposition= Number(prompt("Tell the position of item to be removed from an array containing"+ " " + products.length +" "+ "products" ));
var removed = products.splice(itemposition-1 , 1)
console.log("Removed item is : " +" "+removed)
console.log("Remaining items are" + " " + products.length + " , which are as follows :")
console.log(products)


                 //     Task 7 Eligibility Criteria to Vote      //

var nationality = prompt("Enter your nationality: ")
var gender = prompt("Enter gender")
var age = prompt("Enter age")
if (nationality === "pakistani" || nationality === "indian"){
    if(gender === "male" && age >= 18 ){
        alert("Eligible to vote")
    } else if (gender === "female" && age >= 18){
        var married = prompt("Are you married")
        if(married === "yes"){
            alert("Eligible to vote")
        } else if(married === "no"){
            alert("Ineligible to vote")
        }
    } else if(age< 18){
        alert("Ineligible to vote")
    }
} else{
    alert("Ineligible to vote")
}


                 //     Task 8 PCT for WC      //

var WorldCupSquad = ["Babar Azam" , "Muhammad Rizwan" , "Shadab Khan" , "Shaheen Afridi" ,
                     "Haris Rauf" , "Naseem Shah" , "Imaad Wasim" , "Shoaib Malik" ,
                     "Muhammad Hasnain" , "Iftikhar Ahmad" , "Muhammad Haris" , 
                     "Sarfaraz Ahmad" , "Fakhar Zaman" , "Saaim Ayub" , "Haris Sohail"
] 
var FinalTeamPlayers = WorldCupSquad.slice(0, 11)
console.log(FinalTeamPlayers)