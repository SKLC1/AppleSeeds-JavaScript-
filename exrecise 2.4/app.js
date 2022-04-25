<<<<<<< HEAD

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var today = new Date();
var dayName = days[today.getDay()];
var monthName = [months[today.getMonth()]]
var date = `Today's date is ${dayName} the ${monthName} of ${today.getMonth()}, ${today.getFullYear()}`

// today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDay();

=======

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var today = new Date();
var dayName = days[today.getDay()];
var monthName = [months[today.getMonth()]]
var date = `Today's date is ${dayName} the ${monthName} of ${today.getMonth()}, ${today.getFullYear()}`

// today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDay();

>>>>>>> cb97a31493bd1d99bdcfb1b017308f92c9d09ae8
console.log(date);