let a=parseInt(prompt("Enter the number"))
let tem=a;
var b;
var c=0;


document.write(tem+"<br>")


while(a>0){
	 b=a%10;
	 a=parseInt(a/10);
	 c=c*10+b;	
}

document.write(c+"<br>")

if(c==tem){
	document.write("Given Number is Palindrome")
	
}

else{
	document.write("Given Number is not Palindrome")
}