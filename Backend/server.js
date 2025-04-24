import express from "express"
import bodyParser from "body-parser"
const app = express()

app.get('/', (req,res) => {
    res.send("Hello, World")
})

const PORT = 3000

app.listen(PORT, ()=>{
    console.log(`Construction project server running on http://localhost:${PORT}`)
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

