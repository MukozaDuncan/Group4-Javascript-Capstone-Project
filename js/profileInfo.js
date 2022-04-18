let activeUserId = sessionStorage.getItem("userId");
const systemUsers = JSON.parse(localStorage.getItem('userList'));
let activeUserDetails = (systemUsers.filter(details => details.id === activeUserId))[0];

window.addEventListener("load", () => {
    let usernameDisplay = document.querySelector('#username');
    let userEmailDisplay = document.querySelector('#useremail');
    let userContactDisplay = document.querySelector('#userphone');
    let userLocationDisplay = document.querySelector('#userslocation');

    usernameDisplay.innerHTML = activeUserDetails.surname+" "+activeUserDetails.fname;
    userEmailDisplay.innerHTML = activeUserDetails.email;
    userContactDisplay.innerHTML = activeUserDetails.contact;
    userLocationDisplay.innerHTML = activeUserDetails.location;
});

let currentUserPassword = document.querySelector('#current-password');
let newUserPassword = document.querySelector('#new-password');
let changePasswordButton = document.querySelector('#change-password');
let passwordChangeError = document.querySelector('#change-password-error');

function editPassword(oldPassword, newPassword){
    if(oldPassword != activeUserDetails.password){
        passwordChangeError.innerHTML = "The current password that you have provided is incorrect!";
    }else{
        systemUsers.map(user => {
            if(user.id === activeUserId){
                user.password = newPassword;
                localStorage.setItem('userList',JSON.stringify(systemUsers));
            }
        })
        alert ("Your account password has been updated successfully!");
        currentUserPassword.value = "";
        newUserPassword.value = "";
    }
}

changePasswordButton.addEventListener('click', function(e){
    if((currentUserPassword.value === "") || (newUserPassword.value === "")){
        passwordChangeError.innerHTML = "Please fill in both of the above fields!";
    }else{
        editPassword(currentUserPassword.value, newUserPassword.value); 
    }
})