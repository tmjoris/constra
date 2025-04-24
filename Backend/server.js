import express from "express"
import ussdRouter from './ussd.js'

const app = express()

app.get('/', (req,res) => {
    res.send("Hello, World")
})

app.use("/ussd", ussdRouter)

const PORT = 3000

app.listen(PORT, ()=>{
    console.log(`Construction project server running on http://localhost:${PORT}`)
});


