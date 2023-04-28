const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get("/get", (req, res) => {
    console.log("Received request from client");
    res.status(200).send("Request received, sending response");
})

app.post("/body", (req, res)=> {
    let { name, job } = req.body;
    res.status(200).send(`Received body data for ${job} ${name}`);
})

app.get("/:name", (req, res) => {
    console.log(req.params);
    let name = req.params.name;
    res.status(200).send(`Received parameter data for ${name}`);
})

app.get('/', (req,res)=> {
   let username = req.query.username;
   res.status(200).send(`Received query data for ${username}`)
})

app.listen(4004, () => console.log("Listening on port 4004"));