const button = document.getElementById("btn"); /* assign button from html to a variable */

button.addEventListener("click", myFunction); /* Add event listener */

function myFunction(){
    let InputFilled = true;

    let firstName = document.getElementById("FirstName").value;
    let lastname = document.getElementById("LastName").value;
    let email = document.getElementById("Email").value;
    let password = document.getElementById("Pass").value;

    let FirstErr = document.getElementById("FirstNmErr");
    let SecErr = document.getElementById("SecNmErr");
    let EmailErr = document.getElementById("EmailErr");
    let PassErr = document.getElementById("PassErr");

    const filterEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


    if (firstName === ""){
        InputFilled = false;
        FirstErr.style.visibilty = "visible";
    }

    if (lastname === ""){
        InputFilled = false;
        SecErr.style.visibilty = "visible";
    }

    if(email === ""){
        InputFilled = false;
        EmailErr.style.visibility = "visible";
    } else if(!filterEmail.test(email)){
        InputFilled = false;
        EmailErr.innerHTML = "Invalid e-mail format"
        EmailErr.style.visibility = "visible";
    }

    if (password === ""){
        InputFilled = false;
        PassErr.style.visibility = "visible";
    }

    if(InputFilled){
        alert('Thank you ${firstName}');
    }
}
