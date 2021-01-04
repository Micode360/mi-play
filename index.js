const express = require('express');
const cors = require('cors');
const hostname = '127.23.4.1';
const app = express();


app.use(express.json());
require('dotenv').config();
app.use(cors());
app.use(express.urlencoded({extended: true}));

 

const port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));


app.get('/', (req,res) => {
   res.sendFile('index');
});


app.listen(port, hostname,()=>{
   console.log(`node server is running on http://${hostname}:${port}`);
});
