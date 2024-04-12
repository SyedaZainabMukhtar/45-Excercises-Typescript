let guestslist = ["Zainab" , "Humaima", "Nida" , "Komal"];

let dontCome = guestslist[0];

console.log(dontCome,"can't able to come");

guestslist.splice(0, 1, "Alishba");

guestslist.forEach(guestlist => console.log(`Goodevening, ${guestlist}, Can you spend more time with us?`));

let dontcome = guestslist[1];

console.log(dontcome,"can't able to come");

guestslist.splice(0, 2, "Iqra");

guestslist.forEach(guestlist => console.log(`Goodevening, ${guestlist}, Can you spend more time with us?`));