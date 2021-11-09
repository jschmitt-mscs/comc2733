'use strict'
let queryString = location.search.slice(1);
let mainDiv = document.getElementById("mainDiv");
console.log(mainDiv);
queryString = queryString.replace(/\+/g," ");
queryString = decodeURIComponent(queryString);
console.log(queryString);

let formData = queryString.split(/&/g);
formData.forEach(formElement => {
    let fieldValuePair = formElement.split(/=/);
    let fieldName = fieldValuePair[0];
    let fieldValue = fieldValuePair[1];

    let paragraph = document.createElement("p");
    paragraph.innerHTML = fieldName + ": " + fieldValue;
    mainDiv.appendChild(paragraph);

    localStorage.setItem(fieldName, fieldValue);
    sessionStorage.setItem(fieldName, fieldValue);
    let expirationDate = new Date("11/15/2021");
    document.cookie = fieldName + "="+ encodeURIComponent(fieldValue) + "; expires=" + expirationDate + ";path=/";
})

let localStorageGreeting = document.getElementById("localStorageGreeting");
let localStorageAge = document.getElementById("localStorageAge");
let sessionStorageGreeting = document.getElementById("sessionStorageGreeting");
let sessionStorageAge = document.getElementById("sessionStorageAge");
let cookieStorageGreeting = document.getElementById("cookieStorageGreeting");
let cookieStorageAge = document.getElementById("cookieStorageAge");

if(localStorageGreeting != null){
    //if not null, we are on page 3
    let data = readCookie();

    localStorageGreeting.innerHTML = "Hello " +localStorage.getItem("fname") + " " + localStorage.getItem("lname");
    localStorageAge.innerHTML = "You are " + localStorage.getItem("age") + " years old";

    sessionStorageGreeting.innerHTML = "Hello " +sessionStorage.getItem("fname") + " " + sessionStorage.getItem("lname");
    sessionStorageAge.innerHTML = "You are " + sessionStorage.getItem("age") + " years old";

    cookieStorageGreeting.innerHTML = "Hello " + data.fname + " " + data.lname;
    cookieStorageAge.innerHTML = "You are " + data.age + " years old";
}


function readCookie(){
    let fields = {};
    if(document.cookie){
        let cookieList = document.cookie.split("; ");
        cookieList.forEach(element =>{
            let cookie = element.split("=");
            let name = cookie[0];
            let value = decodeURIComponent(cookie[1]);
            fields[name] = value;
        })
    }
    return fields;
}