import fs from 'fs/promises'
import axios from 'axios'

let url = await axios.get(process.argv[3])
let index = fs.writeFile(process.argv[2], url.data)

console.log('end of program')

// node ex03.js "index.html" 'https://www.google.com'

//fs.copyFile(response.data, '../file2.txt')

/*
console.log('START OF PROGRAM')

let response = await axios.get('https://www.google.com')
fs.readFile(response.data, 'utf-8', (err, data) => {
    if (err) console.error(err)
    else console.log('data', data)
})

fs.copyFile(response.data, '../file2.txt', (err, data) => {
    if (err) console.error(err)
    else console.log('file2.txt: ', data)
})

console.log('END OF PROGRAM') // not executed last!!
*/
