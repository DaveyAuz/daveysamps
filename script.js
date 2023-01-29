// First Dynamic Element   
function getName(){
let user = prompt("Please Enter Your Name");
return user
}
// Second Dynamic
function welcome(name){
    document.write("Welcome, " + name + "!");
}

// Third Dynamic 
function confirmLoud(){
let ans = confirm("THIS IS ABOUT TO GET LOUD... DO YOU HAVE PROPER HEARING PROTECTION??!!");
    if (ans == true) {
        alert("Most Excellent!");
    }else{
        alert("Bogus!");    
    }
}

let userName = getName()
welcome(userName)
confirmLoud()






// ("Well, its too late to turn back now..." + theName)
// prompt(THIS IS ABOUT TO GET LOUD... DO YOU HAVE PROPER HEARING PROTECTION??!!)

// // function functionName(parameters){code you want executed}
// This is how I comment bruh
// function functionName(){
//   // code goes here    
// } 
// let theName = '';


//    theName
//alert()

