var GuestList = ["Angela" , "Jack" , "Lara"];
var GuestName = prompt("What is your name : ");
if(GuestList.includes(GuestName)) {
    alert("Welcome");
}
else {
    alert("Sorry , maybe next time");
}