//import express from node_modules
let express = require('express'); 
//make the application
let app = express();

//serve our files
app.use(express.static('server/public'));    //<-- string path to the static files


//run server!
const PORT = 5000; 

app.listen(PORT, () => {
    console.log('app is running on port 5000'); 
    
})
//to turn it off: ctrl-c

