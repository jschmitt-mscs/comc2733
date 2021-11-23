"use strict";
const headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer cR8RczB_XO_M2i6SAyjC'
};
// Rewrite the following with Arrow Functions:
// a)

// setInterval ( function () {
//     console.log(i++);
// }, 5000);

let i = 0;
setInterval(() => console.log(i++), 5000);

// b)

// function square(x) {
//     return x^2;
// }
let square = (x) => {return x*x};

// c)

// form.onhover = function() {
//     alert("hovering");
// }

let form = document.getElementById("formTest");
$(document).ready(function(){
    $("#formTest").hover(() => alert("hovering"), () => console.log("Left hover"));
}); 


// 2.  In 3 lines, submit an AJAX request to file.php with a get variable of id=99.  Let the request object be named "xhr".
let xhr = new XMLHttpRequest();
xhr.open("get", "file.php?id=99")
xhr.send(null);
// 3.  What property of the xhr would contain the response text?
//xhr.responseText would contain the response text
// 4.  Do the same request with Fetch! (just 1 line  ... no need for outputting the response)
let data = fetch("file.php?id=99")
// 5.  A promise object: promise.

// promise
// .then(msg => "Promise kept")
// .then(msg2 => msg2.substr(0,3))
// .then(msg3 => console.log(msg3))
// .catch(msg=>console.log(msg);

// If the promise resolves, what is the value displayed in the console?
// "pro" is what would show in the console.