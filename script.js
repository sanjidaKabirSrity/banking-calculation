const submit = document.getElementById("submitBtn").addEventListener("click", function(){
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    if(email.value=="something@gmail.com" && password.value=="123456"){
        window.location.href="banking.html";
        document.getElementById("check").style.display="none";
    }else{
        document.getElementById("check").style.display="block";
    }
})
