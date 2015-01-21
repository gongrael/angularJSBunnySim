
var fieldArray = [];


function field(width,height) {
	for(j=0; j<width; j++) {
		for(k=0; k<height; k++) {
			var tempObj = {"x":j, "y":k, "bush":false};
			fieldArray.push(tempObj);
		}
	}
}


