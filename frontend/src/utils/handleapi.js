import axios from 'axios'

const baseURL = "http://localhost:5000"

const getalltodo = (settodo) => {
    axios
    .get(baseURL)
    .then(({data}) => {
        console.log('data---->',data)
        settodo(data)
    })
}

const addtodo = (text, settext, settodo) => {
    axios
        .post(`${baseURL}/save`, { text })
        .then((data) => {
            console.log(data);
            settext("")
            getalltodo(settodo)
        })
        .catch((err) => console.log(err))
}

const updatetodo = (todoid, text, settodo, settext, setisupdating) => {
    axios
        .post(`${baseURL}/update`, { _id: todoid, text })
        .then((data) => {
            settext("")
            setisupdating(false)
            getalltodo(settodo)
        })
        .catch((err) => console.log(err))
}

const deletetodo = (_id, settodo) => {
    axios
    .post(`${baseURL}/delete`, { _id})
    .then((data) => {
        console.log(data)
        getalltodo(settodo)
    })
    .catch((err) => console.log(err))
}

export {getalltodo,addtodo,updatetodo,deletetodo}