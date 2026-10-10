function calculateGrade(score) 
{
	if (typeof score !== "number" || !Number.isFinite(score) || score < 0 || score > 100) 
		{return "Invalid score";}

	if (score >= 90) 
		return "A";
	if (score >= 80) 
		return "B";
	if (score >= 70) 
		return "C";
	if (score >= 60) 
		return "D";
	return "F";
}

function checkAccess(age,hasTicket) 
{
	return typeof age === "number" && Number.isFinite(age) && age >= 18 && hasTicket === true;
}

console.log("90:",calculateGrade(90));
console.log("89:",calculateGrade(89));
console.log("0:",calculateGrade(0));
console.log("100:",calculateGrade(100));
console.log("101:",calculateGrade(101));
console.log("-77:",calculateGrade(-77));
console.log('"100":',calculateGrade("100"));
console.log("Man with ticket:",checkAccess(27,true));
console.log("Man without ticket:",checkAccess(27,false));
console.log("child with ticket:",checkAccess(7,true));
console.log("Negative age:",checkAccess(-77,true));
console.log("Invalid age:",checkAccess("24",true));

