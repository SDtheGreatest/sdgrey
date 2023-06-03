
var navLinks=document.getElementById('navLinks')

function openMenu(){
    navLinks.style.right="0";
}

function closeMenu(){
    navLinks.style.right= "-200px";
}




let fName=document.getElementById("firstname").value;
let lName=document.getElementById("lastname").value;
let email=document.getElementById("email").value;
let message=document.getElementById("message").value;

let bt=document.querySelector(".bt")
let errorName=document.querySelector(".errorName")
let errorLast=document.querySelector(".errorLast")
let errorEmail=document.querySelector(".errorEmail")
let errorMessage=document.querySelector(".errorMessage")


function isblank(field){
    if(field.length==0)
    return true
}

function validate(){
    let fName=document.getElementById("firstname").value;
    let lName=document.getElementById("lastname").value;
    let email=document.getElementById("email").value;
    let message=document.getElementById("message").value;
    let bt=document.querySelector(".bt")
    if (isblank(fName.trim())){
        errorName.style.display="block"
    }else{
        errorName.style.display="none"
    }

    if(isblank(lName.trim())){
        errorLast.style.display="block"
    }else{
        errorLast.style.display="none"
    }
    
    if(isblank(email.trim())){
        errorEmail.style.display="block"
    }else{
        errorEmail.style.display="none"
    }

    if(isblank(message.trim())){
        errorMessage.style.display="block"
    }else{
        errorMessage.style.display="none"
    }

    if (isblank(fName.trim()) || isblank(lName.trim()) || isblank(email.trim()) || isblank(message.trim())){
        return false
    }
}