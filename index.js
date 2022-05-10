const express = require('express')
const app = express()
let port = 3000 || process.env.port


app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})