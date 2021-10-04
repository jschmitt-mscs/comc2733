let text = "This is some text";
let num = 3;

const constNum = 5;

// document.getElementById("li1").onmouseover = function(){
//     document.getElementById("targetElement").innerHTML = text;
// }


let li1 = document.getElementById("li1");
let li2 = document.getElementById("li2");
let li3 = document.getElementById("li3");
let targetElement = document.getElementById("targetElement");

li1.addEventListener("mouseover", function(){
    targetElement.innerHTML = text;
});


li2.addEventListener("mouseover", function(){
    targetElement.innerHTML = num;
});


li3.addEventListener("mouseover", function(){
    targetElement.innerHTML = num + constNum;
});

targetElement.innerHTML = "Initial text";