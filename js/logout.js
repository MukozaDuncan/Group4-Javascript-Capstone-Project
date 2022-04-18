let logoutButton = document.querySelector('#logoutbtn');

logoutButton.addEventListener('click', function(e){
    sessionStorage.removeItem("userId");
    window.location = "index.html";
})