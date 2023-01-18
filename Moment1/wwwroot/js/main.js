//Dagens datum
var date = new Date();

//Variabel för år
var year = date.getFullYear();

//Variabel för månad (+1 för januari)
var mon = date.getMonth() + 1;

//Om bara en siffra lägg på 0 före.
if (mon < 10) {
    mon = "0" + mon;
}

//Variabel för dag
var day = date.getDate();

//Om bara en siffra lägg på 0 före.
if (day < 10) {
    day = "0" + day;
}

date = year + "-" + mon + "-" + day;

//Skriv ut dagens datum
document.getElementById("datetext").innerHTML = date;

