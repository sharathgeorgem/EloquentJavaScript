//Recursive function to find if number is odd or even.
const isEven = function(x) {
  	if(x < 0) return;
	else if(x === 0) return true;
  	else if( x === 1) return false;
  	else return isEven(x - 2);
}
