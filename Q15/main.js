var guestslist = ["Zainab", "Humaima", "Nida", "Komal"];
var dontCome = guestslist[0];
console.log(dontCome, "can't able to come");
guestslist.splice(0, 1, "Alishba");
guestslist.forEach(function (guestlist) { return console.log("Goodevening, ".concat(guestlist, ", Can you spend more time with us?")); });
var dontcome = guestslist[1];
console.log(dontcome, "can't able to come");
guestslist.splice(0, 2, "Iqra");
guestslist.forEach(function (guestlist) { return console.log("Goodevening, ".concat(guestlist, ", Can you spend more time with us?")); });
