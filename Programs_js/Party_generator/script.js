 function beginnig() {
 	var messege = 'So what? Lets get drunk guys!?';
 	alert(messege);
 }
 	setTimeout(beginnig, 3000);


function start() {

var arr = [];
var a = 'nothing';
for (var i=0; i<3; i++) {
	arr[i] = prompt('Please, Provide all what you have:');
	if (arr==a) {
		alert('Run to market, idiot!');
		continue;
	}

	if (arr==false) {
		alert('Hey! Idiot. Try again!');
	}
}
console.log(arr);
alert('So, you have ' +arr[0] + ', ' + arr[1] + ', ' + arr[2] + '?');
}
start();

if (messege==true) {
	start();
}

function prepearing() {
	alert('So how many money do you have?')
}
prepearing();
