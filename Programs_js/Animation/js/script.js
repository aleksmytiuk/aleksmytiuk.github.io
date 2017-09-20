function createMatrix()
{
    var matrix = document.getElementById('matrix');
    var n = 34 * 16;

    for (var i = 0; i < n; i++)
    { 
            var div = document.createElement('div');
            div.className = 'cell';
            matrix.appendChild(div); 
    }
}

createMatrix();

// function getColor()
// {
// 	var blue = document.getElementById('cell');
// 	var red = document.getElementById('red');
// 	var resultColor = blue==red;

// 	if (blue==red) {

// 	}
	
// }
// getColor();

function changeBg(){
   document.getElementById("cell").style.backgroundColor = 'red';
}

changeBg();