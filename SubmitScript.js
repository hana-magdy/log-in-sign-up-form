function SignUpOption() {
    WantedDiv = document.getElementById("SignUpDiv");
    WantedDiv.style.display = 'block';
    UnwantedDiv = document.getElementById("LoginDiv");
    UnwantedDiv.style.display = 'none';

}

function LoginOption() {
    WantedDiv = document.getElementById("LoginDiv");
    WantedDiv.style.display = 'block';
    UnwantedDiv = document.getElementById("SignUpDiv");
    UnwantedDiv.style.display = 'none';

}

function ValidateLogin() {
    before = 0;
    AlertString = "Please enter your ";
    Email = document.getElementById("LoginEmail").value;
    if (Email == "") {
        AlertString = AlertString + "Email ";
        DetectedField = document.getElementById("LoginEmail");
        DetectedField.style.borderColor = "red";
        before = 1;
    }

    Password = document.getElementById("LoginPassword").value;
    if (Password == "") {
        DetectedField = document.getElementById("LoginPassword");
        DetectedField.style.borderColor = "red";
        if (before == 1)
            AlertString = AlertString + "and Password";
        else
            AlertString = AlertString + "Password";
        before = 1;
    }

    if (before == 1) {
        alert(AlertString);
        return false;
    }

}

function ValidateSignUp() {

    Invalid = 0;
    EmailInvalid = 0;
    incomp = 0;
    AlertString = "Please fill the empty fields ( ";
    Name = document.getElementById("Name").value;
    Email = document.getElementById("NewEmail").value;
    Password = document.getElementById("Password").value;
    ConfirmPassword = document.getElementById("ConfirmPassword").value;
    if (Name == "") {
        DetectedField = document.getElementById("Name");
        DetectedField.style.borderColor = "red";
        AlertString = AlertString + "Name ";
        Invalid = 1;
    }
    if (Email == "") {
        DetectedField = document.getElementById("NewEmail");
        DetectedField.style.borderColor = "red";
        AlertString = AlertString + "Email ";
        Invalid = 1;

    }
 //   else{
   //    if(ValidateEmail(Email)==false){
     //       alert("INVALID EMAIL FORMAT");
       //     EmailInvalid = 1;

        //}
        

   //}




    if (Password == "") {
        DetectedField = document.getElementById("Password");
        DetectedField.style.borderColor = "red";
        AlertString = AlertString + "Password ";
        Invalid = 1;
    }
    if (ConfirmPassword == "") {
        DetectedField = document.getElementById("ConfirmPassword");
        DetectedField.style.borderColor = "red";
        AlertString = AlertString + "Confirm Password ";
        Invalid = 1;
    }
    if (Invalid == 1) {
        AlertString += ")"
        alert(AlertString);
    }

    if (Password != ConfirmPassword) {
        alert("Password isn't confirmed.");
        incomp = 1;
    }

    if (incomp == 1 || Invalid == 1) {
        return false;
    }

   // else if(EmailInvalid ==1){
     //   return false;
    //}

}

function ValidateEmail(inputText) {
    var mailformat =  /^[a-zA-Z0–9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0–9](?:[a-zA-Z0–9-]{0,61} [a-zA-Z0–9])?(?:\.[a-zA-Z0–9](?:[a-zA-Z0–9-]{0,61}[a-zA-Z0–9])?)*$/;
    if (mailformat.match(inputText)) {
        return true;
    }
    else {
        return false;
    }
}



