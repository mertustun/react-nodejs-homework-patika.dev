const users = ["Mert", "Omer", "Can", "Ulas"]

/* 
    push
    map
    find
    filter
    some
    every
    includes
*/
//push
users.push("Mehmet")
console.log("PUSH: ", users);

//map
const mappedArr = users.map((item) => {
    return `${item}-22`
})
console.log("MAP: ", mappedArr);
//find 
const newUsers = [
    {
        name: "Mert",
        age: 22
    },
    {
        name: "Can",
        age: 22
    },
    {
        name: "Ulas",
        age: 25
    },
    {
        name: "Deniz",
        age: 28
    }
]

//find method show only first(ensure the conditions) and one data from all array or object 
const findResult = newUsers.find(item => item.name === "Mert" && item.age === 22)
console.log("FIND: ", findResult);

//filter
const filteredArr = newUsers.filter(data => data.age === 22)
const bracketsFiltered = newUsers.filter(({name, age}) => name === "Mert" && age == 22)
console.log("FILTER: ", filteredArr);
console.log("FILTERED BRACKETS: ", bracketsFiltered);

//some (return true or false up to conditions)
const someQuery = newUsers.some(item => item.age === 22)
console.log("SOME: " ,someQuery);

//every (all element must ensure the conditions to return as true)
const every = newUsers.every(x => x.age > 20)
console.log("EVERY: ", every);

//includes true-false
const fruits = ["apple", "banana", "pineapple"]
const isInclude = fruits.includes("banana")
console.log("INCLUDES: ", isInclude);