// First Dynamic Element   
function getName(){
//    return name
}

// Second Dynamic
function welcome(){
    let name = prompt("Please Enter Your Name");
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

function numberGuess(){ 
    let guess = prompt("Guess How Many Guitars Davey Owns? Pick Between 4-8");
    console.log (guess);
    guess = parseInt(guess) 
    if (guess == 7){
        document.write("MOST EXCELLENT!!!");
    }   else if (guess > 7){
        document.write("Thats Too High! But you can Buy Me One ;}!");
    }   else if (guess < 7){
        document.write("Thats Too Low! BOGUS!!!");   
    }   else {
        document.write("WOAH!!! Most NON, NON, NON, Heinous!!!")
        console.log("Guess Again!")
    }
}

// Function for Number Guess

// //CREATING THE FUNCTION FOR DISPLAYING PICTURES
function showImage() {
    let response = prompt("Pick a number of new guitars for Davey between 1 and 3");
    response = parseInt(response)
    console.log(response);

    if (response == 3) {
      
        for(let i = 1; i < 4; i++) {

            let img = document.createElement('img');
            img.src = "CapaldiDrsGuitar.jpg";
            document.body.appendChild(img);
            console.log(response);
        }
    } else {
        showImage();
    }

    //     document.write("<img src='./CapaldiDrsGuitar.jpg' width = '350px'></img>");
    //     console.log(number);
    //     console.log(i);
    // }
}
    function userName(){
    let  (userName) ; getName()
    welcome(userName)
    confirmLoud()
    numberGuess()
    popupPicture();
    }
    //     if (number == 1) {
    //         document.write("<img src='./CapaldiDrsGuitar.jpg' width = '350px'></img>");
    //         console.log(number);

    //     } else if (number == 2) {
    //         document.write("<img src='./CapaldiDrsGuitar.jpg'350px'></img>");
    //           document.write("<img src='./CapaldiDrsGuitar.jpg' width = '350px'></img>");
    //         console.log(number);

    //     } else if (number == 3) {
    //         document.write("<img src='./CapaldiDrsGuitar.jpg' width = '350px'></img>");
    //         document.write("<img src='./CapaldiDrsGuitar.jpg' width = '350px'></img>");
    //         document.write("<img src='./CapaldiDrsGuitar.jpg' width = '350px'></img>");
    //         console.log(number);


    //         } else if (number == 4) {
    //         document.write("<img src='./CapaldiDrsGuitar.jpg' width = '350px'></img>");
    //         document.write("<img src='./CapaldiDrsGuitar.jpg' width = '350px'></img>");
    //         document.write("<img src='./CapaldiDrsGuitar.jpg' width = '350px'></img>");
    //         document.write("<img src='./CapaldiDrsGuitar.jpg' width = '350px'></img>")
    //           console.log(number);
    //     


    //        } else { 
    //         popupPicture();
    //         console.log(number);
    //     }
        
    // }




   







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

