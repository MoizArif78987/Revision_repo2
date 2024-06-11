let array =["Civic","Mehran", "Prado"];

let [Car,, SUV]= array;



document.getElementById('email').value = sessionStorage.getItem("email")

const Login = (event) => {
    event.preventDefault();
    let pass = document.getElementById("password").value;
    let data = JSON.parse(localStorage.getItem('data'));
    let user = data.find((key) => {
        return key.email == sessionStorage.getItem("email")
    })
    if (user) {
        if (user.password === pass) {
            sessionStorage.removeItem("email")
            document.getElementById("password").style.borderColor = "#486BD9"
            window.alert("Login Successful")
            if (Notification.permission === 'granted') {
                new Notification(`HEY, Moiz`);
            } else if (Notification.permission !== 'denied') {
                Notification.requestPermission().then(permission => {
                    if (permission === 'granted') {
                        new Notification(`HEY, ${sessionStorage.getItem("email")}`);
                    }
                });
            }         
            window.location.href = "index.html"
        }
        else {
            window.alert("Wrong Password Try Again")
            document.getElementById("password").style.borderColor = "red"
        }
    }
    else {
        window.alert("No Such Account Exists")

    }

}

