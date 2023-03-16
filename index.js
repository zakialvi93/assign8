const express = require('express')
const app = express()
const port = 3001;
app.use((req, res) => {
    console.log("Use working without route");
    
})

app.get('/', (req, res, next) => {
    res.send("Using Get Function");
    next()
    })




app.use('/create',(req, res, next) => {
    res.send("Use working without route");
    next()
})


app.listen(port, function() {
    console.log(`Server is running on port ${port}!`)
    });