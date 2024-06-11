import User from './info.js'

const Signup = (event) => {
    let name = document.getElementById('name').value;
    let mail = document.getElementById('email').value;
    let pass = document.getElementById('password').value;
    let data = JSON.parse(localStorage.getItem('data'));
    let flag = Boolean(0)

    if (data != null) {
        data.map((key, index) => {
            if (mail === key.email) {
                window.alert("Account already exists, try signing in with a new email ")
                flag = 1;
                document.getElementById('email').style.borderColor = 'red';
                event.target.reset()
            }
        })

    }
    if ((mail || pass || name) !== "" && flag == 0) {
        let obj = new User(name, mail, pass)
        obj.save()
        window.alert("Account creation successful")
        document.getElementById('email').style.borderColor = '#486BD9';
        document.getElementById('cnfrm').style.borderColor = '#486BD9';
        event.target.reset();
        window.location.href = "index.html"
        // if (data == null) {
        //     localStorage.setItem('data', JSON.stringify([obj]))
        //     window.alert("Account creation successful")
        //     document.getElementById('email').style.borderColor = '#486BD9';
        //     document.getElementById('cnfrm').style.borderColor = '#486BD9';
        //     event.target.reset();
        //     window.location.href="index.html"
        // }
        // else {
        //     data.push(obj);
        //     localStorage.setItem('data', JSON.stringify(data))
        //     window.alert("Account creation successful")
        //     document.getElementById('email').style.borderColor = '#486BD9';
        //     document.getElementById('cnfrm').style.borderColor = '#486BD9';
        //     event.target.reset()
        //     window.location.href="index.html"
        // }
    }
    else if (pass !== cnfrm) {
        window.alert("Password does not match confirm password")
        document.getElementById('cnfrm').style.borderColor = 'red';
    }

}


let btn = document.getElementById("Submit-Btn");
btn.addEventListener('click', Signup)