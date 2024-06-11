export default class User{
    constructor(name,email,password)
    {
        this.name= name;
        this.email=email;
        this.password=password;
    }
    save(){
        console.log(`The name of the user is ${this.name}`)
        console.log(`The email of the user is ${this.email}`)
        console.log(`The password of the user is ${this.password}`)
    }
}