//creating a guest list array
var guestslist = ["Zainab", "Humaima", "Nida", "Komal"];
//guest who cant able to come 
var dontCome = guestslist[0];
//Print the name who is not coming 
console.log(dontCome, "Can't able to come");
// Removing name from guest list 
guestslist.splice(0, 1, "Alishba");
//Message for updation in furniture
console.log("Good News! We have found a bigger table for dinner.");
//adding the name in the first position
guestslist.unshift("Iqra");
//Adding a new guest in the end of the list
guestslist.push("Nimra");
//Get a middle index of our guest list array
var middleindex = Math.floor(guestslist.length / 2);
//Adding a new guest in the middle of the list 
guestslist.splice(middleindex, 0, "Safia");
//Print message of updated list 
console.log("updated list of guestlist");
//Sending a invitation message to our guests one by one with their name
guestslist.forEach(function (oneguest) { return console.log("Goodevening ".concat(oneguest, ", Would you like to have a dinner with us?")); });
