//To create a ChessBoard Pattern
let str = "";
let size = 8;
for(let i = 1; i <= size * size; i++) {
	if((i%(size*2) <= size) && (i%(size*2) != 0)) {
  	  if(!(i%2))
        str += "#";
      else
        str += " ";
    }
  	else {
      if(!(i%2))
        str += " ";
      else 
        str += "#";
    }
  if(i%size==0) {
  	str += "\n"; 
  }
}
console.log(str);
