/*
Gingerbread Rock
Adam Abbas and Irene Lam
SoftDev1 pd7
HW#15 -- Sequential Progression
2017-12-07
*/

//Fibonacci
var fibonacci = function(n){
    if (n == 0)
        return 0;
    if(n <= 2){
        return 1;
    }
    else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

console.log("Fibonacci Tests!!");

console.log("n = 8");
console.log(fibonacci(8));
console.log("Should be 21");

console.log("n = 4");
console.log(fibonacci(4));
console.log("Should be 3");

console.log("n = 5");
console.log(fibonacci(5));
console.log("Should be 5");

//GCD
var gcd = function(a,b){
  //Shoutout to Arif for being a real homie.
    var t;
    while(b != 0){
      t = b;
      b = a % b;
      a = t;
    }
    return a;
}

console.log("GCD Tests:");

console.log("A = 50, B = 25");
console.log(gcd(50, 25));
console.log("Should be 25");

console.log("A = 64, B = 24");
console.log(gcd(64,24));
console.log("Should be 8");

console.log("A = 24, B = 36");
console.log(gcd(24, 36));
console.log("Should be 12");

//List of students
var students = ["student1", "student2", "student3", "student4", "student5", "student6", "student7", "student8"];

//Random student from above list
var randomStudent = function(){
    var len_stud = students.length;
    var rand_ind = Math.floor(Math.random() * len_stud);
    //console.log(rand_ind);
    return students[rand_ind];
}

console.log("Here's 5 random students (there's 8 students):");
console.log(randomStudent());
console.log(randomStudent());
console.log(randomStudent());
console.log(randomStudent());
console.log(randomStudent());
console.log('\n\n\n\n\n\n\n\n')
console.log("Button testings");

//Buttons for...
//Fibonacci (random number tested between 1 and 30)
var fibCallback = function(e) {
    var randn = Math.ceil(Math.random()*30);
    console.log("\n\nFibonacci call for " + randn.toString());
    console.log(fibonacci(randn));
}
var fib = document.getElementById("fib");
fib.addEventListener("click", fibCallback);

//GCD
var gcdCallback = function(e) {
    var randa = Math.ceil(Math.random()*1000);
    var randb = Math.ceil(Math.random()*50);
    console.log("\n\nGCD call for " + randa.toString() + " and " + randb.toString());
    console.log(gcd(randa, randb));
}
var gcd1 = document.getElementById("gcd1");
gcd1.addEventListener("click", gcdCallback);

//Random Student
var randstudentCallback = function(e) {
    console.log("\n\nHere are 3 random students (out of 8):");
    console.log(randomStudent());
    console.log(randomStudent());
    console.log(randomStudent());
}
var randstudent = document.getElementById("randstudent");
randstudent.addEventListener("click", randstudentCallback);