
//creating a guest list array
let guestslist = ["Zainab", "Humaima","Nida", "Komal"];   

 //guest who cant able to come 
let dontCome = guestslist[0];                             

//Print the name who is not coming 
console.log(dontCome, "Can't able to come");            

// Removing name from guest list 
guestslist.splice(0,1,"Alishba");                       

//Message for updation in furniture
console.log("Good News! We have found a bigger table for dinner.");    

 //adding the name in the first position
guestslist.unshift("Iqra");                                 

//Adding a new guest in the end of the list
guestslist.push("Nimra")                                   

 //Get a middle index of our guest list array
let middleindex: number = Math.floor (guestslist.length / 2);    

 //Adding a new guest in the middle of the list 
guestslist.splice(middleindex,0, "Safia");    

//Print message of updated list 
console.log("updated list of guestlist");       

//Sending a invitation message to our guests one by one with their name
guestslist.forEach(oneguest => console.log(`Goodevening ${oneguest}, Would you like to have a dinner with us?`));

// update for the guests
console.log("Unfortunately, the new dinner table won't arrive on time, so I can only invite two guest to have a diinner with me")

//using while-loop to remove guests from the array until two names left
while(guestslist.length > 2) {
    let removeGuest = guestslist.pop();
    console.log(`Sorry, ${removeGuest} I cant invite you to dinner`) ;
}

//sending a invitations to the last two guests on the list
console.log("Invitations to the last two guests");
guestslist.forEach(lastTwo => console.log(`Luckily ${lastTwo}, you are still invited to dinner`)
);


//reving last two names 
guestslist.pop();
guestslist.pop();

console.log("Empty List:", guestslist);

