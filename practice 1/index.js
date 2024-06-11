const person = [{
    name: "John",
    age: 30,
    city: "New York"
},
{
    name: "Moiz",
    age: 22,
    city: "Lahore"
}];

// Using Object.key
person.map(value =>{
    Object.keys(value).forEach(key =>{
        console.log(key + ": " + value[key])
    })
})

let array =["moiz","arif","fateh"]
const getnames =(...names)=>{
console.log(names);
}

getnames(...array)