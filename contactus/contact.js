function send(){

    var email = document.getElementById("email").value
    var num = document.getElementById("number").value
    var msg = document.getElementById("Message").value

    if (email === "" || num === "" || msg === ""){
        alert("Please fill all fields")
        return;
    }
    

    var emailpattern = /^[A-z 0-9]+[@][A-z]{0,5}[.][a-z]{2,3}$/
    if(!emailpattern.test(email)){
        alert("Please Enter a Valid Email Address")
        return;
    }

    console.log("Name:", num);
    console.log("Email:", email);
    console.log("Message:", message);

    document.getElementById("formsubmit").reset();

}