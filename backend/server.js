// req express
const express = require("express")
const cors = require("cors");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || process.env.BACKEND_PORT || 3009;

require("./config/db.connection");

let baseUrl = "http://localhost"

app.get("/", (req,res)=>{
    res.send("this is the landing page")
})
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(
    cors({
      origin: [
        `${baseUrl}:${process.env.FRONTEND_PORT}`,
      ],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );

//connecting routes
const routes = require("./routes");
app.use('/', require("./routes/user.run.routes"))


app.listen(process.env.PORT || 3009, ()=>{
    console.log("Listening on Port 3009")
});
