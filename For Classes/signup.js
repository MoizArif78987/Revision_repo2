import User from './user.js'

const Submit =()=>{
    const name= document.querySelector('#name').value;
    const email= document.getElementById('email').value;
    const password= document.getElementById('password').value;
    let user = new User(name, email, password)
    user.save()
}

let btn = document.getElementById("Submit-Btn");
btn.addEventListener('click', Submit)