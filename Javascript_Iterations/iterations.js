console.log("Use a for loop to print out all the EVEN numbers from zero (0) to 100.s")
//Use a for loop to print out all the EVEN numbers from zero (0) to 100.
for (let i = 0; i<100; i+=2){
    console.log(i)
};

console.log("Use a for loop to print out the SUM of all the ODD numbers between 1 and a user provided value. one")
//Use a for loop to print out the SUM of all the ODD numbers between 1 and a user provided value.
let n = (Number(prompt("Enter a number for n: ")))
for (let i= 1; i<=n; i=2){
    console.log(i)
}