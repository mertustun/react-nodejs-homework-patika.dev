import axios from 'axios'

export default async function getData(user_id) {
    try {
        // const [user, post] = await Promise.all([axios.get(`https://jsonplaceholder.typicode.com/users/${user_id}`),
        // axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`)
        // ])
        // const item = { ...user.data, post: post.data }
        // console.log(item);
       
        const {data : user} = await axios(`https://jsonplaceholder.typicode.com/users/${user_id}`)
        const {data : posts} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`)
        // const item = {...user.data, posts: posts.data}
        //--CREATE A NEW OBJECT AND JOIN THE USER'S INFO AND PSOTS//
        const newObj = {
            userInfo: user, //user info
            posts: posts //posts of user
        }
        console.log(newObj);
    } catch (err) {
        console.log(err);
    }
}