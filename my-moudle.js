export default (name) => {
    console.log(`hello ${name}`);
}

const addition = (a, b) => a + b
const subtraction = (x, y) => x - y

const text = "Text"

const user = {
    name: "Mert",
    surname: "Ustun"
}

const users = [
    {
        name: "Omer",
        surname: "Yilmaz"
    },
    {
        name: "Can",
        surname: "Gunel"
    }
]

export { addition, subtraction, text, user, users }