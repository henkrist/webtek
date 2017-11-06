var date = new Date();
var n = date.getDay();
var now = date.getHours() + "." + date.getMinutes();
var weekdays = [
    ["Sunday"], //Closed
    ["Monday", 10.00, 18.00],
    ["Tuesday", 10.00, 18.00],
    ["Wednesday", 10.00, 18.00],
    ["Thursday", 10.00, 18.00],
    ["Friday", 10.00, 18.00],
    ["Saturday", 10.00, 14.00]
];
var day = weekdays[n];
document.getElementById("timeDiv");


if (now > day[1] && now < day[2]) {
    timeDiv.innerHTML = "Wer\'e open";
    timeDiv.style.color = '#1c3f26';
}
else {
    timeDiv.innerHTML = "Wer\'e closed";

    timeDiv.style.color = "#771424";
}
