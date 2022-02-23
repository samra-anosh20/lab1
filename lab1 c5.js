//Develop and demonstrate JavaScript script that uses functions for the following problems: 
//1.Parameter: A string 
//2.Output: The position in the string of the left-most vowel 
//3.Parameter: A number  
//4.Output: The number with its digits in the reverse order

function string(str)
{
    var x=str.split(",")
    console.log(x[0])
}
string("a,i,z,a,b,e,l,l")

function rev_num(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(rev_num(987654321)));
