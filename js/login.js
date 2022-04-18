// window.addEventListener("load", () => {
    let submittedEmail = document.querySelector('#useremail');
    let submittedPassword = document.querySelector('#userpassword');

    let loginButton = document.querySelector('#loginbutton');

    let userEmailError = document.querySelector('#useremail-error');
    let UserPasswordError = document.querySelector('#userpassword-error');

    function authenticateUser(userEmail, userPassword){
        const systemUsers = JSON.parse(localStorage.getItem('userList'));
        let match = 0;
        let userId;
        if(systemUsers){
            systemUsers.map(user => {
                if((userEmail === user.email) && (userPassword === user.password)){
                    match = match + 1;
                    userId = user.id;
                }
            })
            if(match === 0){
                alert ("The email address or password you submitted is incorrect please login again or create a new account.");
            }else{
                sessionStorage.setItem("userId", userId);
                alert ("Login successfull.");
                window.location = "homepage.html";
            }
        }else{
            alert ("Please create an account with the system!");
            window.location = "signup.html";
        }
    }

    loginButton.addEventListener('click', function(e){
        // if((submittedPassword.value === "") && (submittedEmail.value === "")){
        //     userEmailError.innerHTML = "Please provide your Email Address.";
        //     userPasswordError.innerHTML = "Please provide your password.";
        // }else if(submittedEmail.value === ""){
        //     userEmailError.innerHTML = "Please provide your Email Address.";
        //     userPasswordError.innerHTML = "";
        // }else if(submittedPassword.value === ""){
        //     userEmailError.innerHTML = "";
        //     userPasswordError.innerHTML = "Please provide your password.";
        // }else{
            authenticateUser(submittedEmail.value, submittedPassword.value);
        // }
    })
// });