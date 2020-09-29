import axios from 'axios'

async function makeHeadRequest() {
    let res = await axios.get('http://webcode.me')

    console.log(`Status: ${res.status}`)
    console.log(`Server: ${res.headers.server}`)
    console.log(`Date: ${res.headers.date}`)
    console.log(`Time: ${res.duration}`)
}

makeHeadRequest()
