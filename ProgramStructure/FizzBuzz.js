//FizzBuzz program
for(let i=1; i<=100; i++) {
  	if(!(i%3) && !(i%5)) {console.log("FizzBuzz"); continue;}
	if(!(i%3)) {console.log("Fizz"); continue;}
  	if(!(i%5)) {console.log("Buzz"); continue;}
  	{console.log(i);}
}
