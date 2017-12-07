var fibonacci = function(n){
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

var students = ["student1", "student2", "student3", "student4", "student5", "student6", "student7", "student8"];

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
