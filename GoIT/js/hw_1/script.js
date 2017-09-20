var arr = [];
for (var i=0; i<3; i++) {
	arr[i] = prompt('Please, enter name');
}

console.log(arr);

var userName = prompt('What is your name?');


for (var i = 0; i < 3; i++) {
	if (arr[i] == userName) {
	alert('Welcome to the Machine, Mr ' + userName);
	break;
	}
}

if ( i==3 ){
	alert('Error');
}



var x = prompt (' Enter number');
var n = prompt ('Enter degree');

function pow(a,n) {
	
var result = 1;

for (var i=0; i<n; i++){
	result=result * a;
}

	return result;
}
	var powResult = pow(x,n);
	
	alert('Result is ' + powResult);


