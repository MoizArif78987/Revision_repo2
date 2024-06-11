Notification.requestPermission()
let LoginBtn = document.getElementById("LoginBtn");
LoginBtn.addEventListener('click',()=>{
    let email =document.getElementById("email").value
    if(email==="")
        {
            window.alert("Enter a valid email first")
        }
    else{
        let data = JSON.parse(localStorage.getItem('data'))
        if(data === null)
            {
                window.alert("account does not exist, Kindly Signup first")
                window.location.href="signup.html"
            }
        else{
            sessionStorage.setItem('email',email)
            window.location.href="login.html"
        }
    }
})