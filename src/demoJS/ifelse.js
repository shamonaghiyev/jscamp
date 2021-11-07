let date = new Date();
let hour = date.getHours();

if(hour >= 5 && hour <= 11){
    console.log("Good Morning!");
} else if(hour > 11 && hour < 17) {
    console.log("Good Afternoon!");
} else if(hour >= 17 && hour < 23) {
    console.log("Good Evening!");
} else {
    console.log("Good Night!");
}