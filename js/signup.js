// window.addEventListener("load", () => {
    let submittedFirstName = document.querySelector('#fname');
    let submittedSurname = document.querySelector('#surname');
    let submittedEmail = document.querySelector('#useremail');
    let submittedPassword = document.querySelector('#userpassword');
    let submittedContact = document.querySelector('#usercontact');
    let submittedLocation = document.querySelector('#userlocation');
    
    let signupButton = document.querySelector('#signupbutton');

    function registerUser(userFname, userSurname, userEmail, userPassword, userContact, userLocation){
        const systemUsers = JSON.parse(localStorage.getItem('userList'));
        let duplicate = 0;
        if(systemUsers){
            systemUsers.map(user => {
                if(userEmail === user.email){
                    duplicate = duplicate + 1;
                }
            })
            if(duplicate > 0){
                alert ("The email address that you provided already exists in the system!");
            }else{
                // let newestUser = systemUsers.slice(-1);  //To get the very last character of an array.
                let newestUser = systemUsers[0];
                let newestUserId = newestUser.id;
                let latestIndex = (newestUserId).substring((newestUserId).indexOf('-') + 1);
                let newIndex = (parseInt(latestIndex, 10)) + 1;
                let newUser = {
                    "id": "user-"+newIndex,
                    "fname": userFname,
                    "surname": userSurname,
                    "email": userEmail,
                    "password": userPassword,
                    "contact": userContact,
                    "location": userLocation
                }
                systemUsers.unshift(newUser);
                localStorage.setItem('userList',JSON.stringify(systemUsers));
                sessionStorage.setItem("userId", newUser.id);
                alert ("Your account has been successfully created!");
                window.location = "homepage.html";
            }
        }else{
            let newUser = {
                "id": "user-1",
                "fname": userFname,
                "surname": userSurname,
                "email": userEmail,
                "password": userPassword,
                "contact": userContact,
                "location": userLocation
            }
            localStorage.setItem('userList',JSON.stringify([newUser]));
            sessionStorage.setItem("userId", newUser.id);
            alert ("Your account has been successfully created!");
            window.location = "homepage.html";
        }
    }

    signupButton.addEventListener('click', function(e){
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
            registerUser(
                submittedFirstName.value,
                submittedSurname.value,
                submittedEmail.value,
                submittedPassword.value,
                submittedContact.value,
                submittedLocation.value
            );
        // }
    })
// });