/* setTimeout(()=>{
    console.log("Hello");
}, 5000) // The func will run after 5 seconds only once.

setInterval(() => {
    console.log("Hello I will run in every second.");
}, 1000) //The func will run after 1 sec and keep running in a every sec.

//Those are the differences between setTimeout and setInterval.
*/

/* const sayHello = (callback) => {
    callback()
}
// callback func is uses like that.

sayHello(()=>{
    console.log("Hello");
})
// The parameter of the sayHello function can be another function and in that way, call the parameter func
// in the main function as above.
*/
import fetch from "node-fetch";
import axios from "axios";
// The some using of fetch function is written below. The important points are fetch by ordered and async-await.

/* fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json()) // The stringify datas will be parsed as a json format.
    .then(data => console.log(data))
// If we have more than one datas to be used and we want to use them by order, the methods can be used below.
*/
/* fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
        console.log(data)

        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then(response => response.json())
            .then(post_one => {
                console.log(post_one);
                fetch("https://jsonplaceholder.typicode.com/posts/2")
                    .then(r => r.json())
                    .then(post_two => console.log(post_two))
            })
    }) //in that way, the datas will be shown by ordered.
 */
//The metthod used above can be looked complicated. That is why, async-await can be used. It is showed
//below.

// async function getData() {
//     /* const res = await fetch("https://jsonplaceholder.typicode.com/users")
//     const data = res.json()
//     console.log(data); //This node can be written shortly like below.
//     */

//     const data = await (
//         (await fetch("https://jsonplaceholder.typicode.com/users")))
//         .json()
//     const post1 = await (
//         (await fetch("https://jsonplaceholder.typicode.com/posts/1")))
//         .json()
//     const post2 = await (
//         (await fetch("https://jsonplaceholder.typicode.com/posts/2")))
//         .json()

//     console.log("Users are downloaded: ", data);
//     console.log("Post1 is downloaded: ", post1);
//     console.log("Post2 is downloaded: ", post2);
// }
// getData(); // To not call the function by name like that, the anonim func may be used below.

/* (async () => {
    const data = await (
        (await fetch("https://jsonplaceholder.typicode.com/users")))
        .json()
    const post1 = await (
        (await fetch("https://jsonplaceholder.typicode.com/posts/1")))
        .json()
    const post2 = await (
        (await fetch("https://jsonplaceholder.typicode.com/posts/2")))
        .json()

    console.log("Users are downloaded: ", data);
    console.log("Post1 is downloaded: ", post1);
    console.log("Post2 is downloaded: ", post2);
})() // like that (Those functions are running as a same.)
*/

// async function getDatabyAxios() {
//     //by using axios we dont need to parse to json our datas. The using of axios shown below.
//     const { data: users } = await axios("https://jsonplaceholder.typicode.com/users") // if we want to give an unique name our data, use the {data: given name}.
//     const { data: post1 } = await axios("https://jsonplaceholder.typicode.com/posts/1")
//     const { data: post2 } = await axios("https://jsonplaceholder.typicode.com/posts/2")
//     console.log(users);
//     console.log(post1);
//     console.log(post2);
// }
// getDatabyAxios(); //Axios will be used react project frequently and it is more useful then fetching shown as above. (It is wirtten shortly).

/*==== PROMISE : Fetch is return a promise and then method use to process it. We can write our promise function and then handle those functions within same method in fetch ====*/

//firstly basic using of promise...

/* const getComments = (num) => {
    return new Promise((resolve, reject) => {
        //Promise has two parameters which are resolve and reject. then node look over in the resolve paramter's operations and the catch is reject's.
        if(num === 1){
            resolve({text: "Mert Ustun"})
        }
        reject("Something went wrong. The operation was not working!!")
    })
}
getComments(1)
.then(data => console.log(data))
.catch(err => console.log(err)) */

//Now, we use the data from axios in our functions and then our function is doing the operations.


 const getUsers = () => {
    return new Promise(async (resovle, reject) => {
        const {data: users} = await axios("https://jsonplaceholder.typicode.com/users")
        resovle(users)
        // reject("Some problem occured.") // Inital error message We determine the resolve and reject by using conditions normally.
    })
}

const getPost = (post_id) => {
    return new Promise(async (resovle, reject) => {
        const {data: post} = await axios(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
        resovle(post)
    })
}


Promise.all([getUsers(), getPost(1)])
.then(console.log)
.catch(console.log) //print the all data by using Promise.all([method]).then().catch()!!       ///PROMISE ALL METHOD TO WRITTEN IN CONSOLE OR ANYWHERE///


    (async () => {                                                                            ///ANONIM ASYNC FUNCTION AND AWAIT METHOD TO WRITTEN IN CONSOLE OR ANYWHERE///
        // getUsers().then(data => console.log(data)).catch(err => console.log(err)) // error message defines in reject. reject("something went wrong.") <-- sample!
        const users = await getUsers() // in normal function we use then-catch method like above.
        const post = await getPost(1)

        console.log(users);
        console.log(post);
    })() 

