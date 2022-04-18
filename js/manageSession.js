window.addEventListener("load", () => {
    let userId = sessionStorage.getItem("userId");
    let activeUser = document.querySelector('#activeuser');
    let dispUserName = document.querySelector('#userdetails');

    const systemUsers = JSON.parse(localStorage.getItem('userList'));
    let activeUserDetails = (systemUsers.filter(details => details.id === userId))[0];
    // let activeUserFname = activeUserDetails.fname;
    
    activeUser.innerHTML = activeUserDetails.fname;
    // dispUserName.innerHTML = userId;
});