import express from "express";
const app = express();
const port = 3000;
app.get("/",(req,res) => {
    res.send("<h1>Hello World</h1>");
});
app.get("/about",(req,res) => {
    res.send("<h1>About Me</h1><p>My name is Ayush</p>");
});
app.get("/contact",(req,res) => {
    res.send("<h1>Contact Me</h1><p>Phone : 7728095511</p>");
});
app.listen(port,() => {
    console.log("Server running on port 3000");
});