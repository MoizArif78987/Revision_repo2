export default class User {
    constructor(name, email, password) {
        this.name =name;
        this.email = email;
        this.password = password;
    }
    save(){
        let data = JSON.parse(localStorage.getItem('data'));
        let obj ={
            name : this.name,
            email :this.email,
            password :this.password
        }
        if (data == null) {
            localStorage.setItem('data', JSON.stringify([obj]))
        }
        else {
            data.push(obj);
            localStorage.setItem('data', JSON.stringify(data))
        }
    }
}