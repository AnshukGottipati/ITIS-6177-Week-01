const express = require('express')
const app = express();


app.get('/hello', (req, res) => {
    res.send("This is the hello response");

})

app.get("/", (req, res) => {
    res.send("This is the express server? ")
})

app.listen(3000, () => {
    console.log("Server is runnign");
});