// function taskone( )
// {
//     console.log("task");
// }



// function taskTwo()
// {
//     console.log("task 2");
// }

// srtTimeout(taskone,2000);

// taskTwo();



// Anonymous Function

// setTimeout(function()
// {
//     console.log("This message is shown after 3 sec have passed")
// },3000); 

// CallBack function for event declairation
window.onload = function()
{
    document.querySelector("#Callback -btn").addEventListener("click", function()
{
    console.log("User has clicked on the button");
});
}


//Anonymous function

let show = function( )

{
    console.log("Hello World !")
}
show();



// ----
console.log("Hey there");

let numArr = [4,2,1,18,6,20,35,80];
let stringArr = ["Prashant", "Rahul", "Rohit", "Akash", "Tanuj", "Gaurav","Kunal"];

// Using copyWithin()
console.log("Copying and appending the first 2 elements of num array to the array itself: numArr = ", numArr.copyWithin(2));

// filtering the records in the array
console.log("Filtering all the elements greater than 10 from an array: ", numArr.filter(value => value >= 10));

//Using find()
console.log("Finding the fisrt occurence of a particular record from an array using find Method: ", stringArr.find(el => el.length > 5));




// Using setTimeout() with anonymous function
setTimeout(function(){
    console.log("This will trigger just after 5 seconds");
}, 5000)

// Using findIndex();
console.log("Finding the index of first occuring element of an array: ", numArr.findIndex(el => el>5));

//forEach using callback function
stringArr.forEach(function(name){
    console.log("Hi There! "+name);
})

// sort method
console.log("sorted array: ", numArr.sort());

// Greet user using an Anonymous function
let greetUser = function(){
    console.log("WELCOME TO THIS TRAINING BOOTCAMP!!");
}
greetUser();



// async/await

async function greet(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Good Evening, Gyanendra Pal Singh! Hope You're doing Well"), 7000)
    });

    let result = await promise;

    alert(result); //this will make an alert only after the promise gets resolved i.e. after 7 seconds.
}

greet();