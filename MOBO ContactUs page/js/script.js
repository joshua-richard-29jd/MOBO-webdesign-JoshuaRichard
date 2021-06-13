const userName = document.getElementById("name")
const email = document.getElementById("email")
const phnumber = document.getElementById("ph-number")
const bname = document.getElementById("bname")
const webSiteUrl = document.getElementById("websiteurl")
const drop = document.getElementById("drop")
const messageBox = document.getElementById("messagebox")
const sendMessage = document.getElementById("send-message")
const form = document.getElementById("form")


function validateInput(){
    if(userName.value.trim() === "") {
        onError(userName, "Please Enter Fullname")
    } else {
        onSuccess(userName);
    }

    if(email.value.trim()==="" ) {
        onError(email,"Please enter email")
    }else {
        if(!isValidEmail(email.value.trim())) {
            onError(email, "Please enter valid Email")
        }else {
            onSuccess(email)
        }
    }

    if(phnumber.value.trim()==="" ) {
        onError(phnumber,"Please enter Mobile Number")
    }else {
        onSuccess(phnumber)
    }
    
    if (drop.value == "Select an option") {    
        onError(drop,"Please Select any subject")
    }    
    else {
        onSuccess(drop)
    }    

    if(messageBox.value.trim() === "") {
        onError(messageBox, "Please Enter message")
    } else {
        onSuccess(messageBox);
    }

}

sendMessage.addEventListener("click", (event) => {
   event.preventDefault();
validateInput();
});

function onSuccess(input) {
    let parent = input.parentElement;
    let messageElement = parent.querySelector("small");
    messageElement.style.display="none";
    messageElement.innerText = "";
}

function onError(input,message) {
    let parent = input.parentElement;
    let messageElement = parent.querySelector("small");
    messageElement.style.display="initial";
    messageElement.innerText = message;
}

function isValidEmail(email){
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
 }

