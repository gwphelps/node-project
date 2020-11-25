let express = require("express");
let cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) =>{
    res.send("{\"message\":\"hello from node!\"}");
});

app.get("/status", (req, res) =>{
    res.send(true);
});

app.listen(3000, () => console.log("listening on port 3000"));
