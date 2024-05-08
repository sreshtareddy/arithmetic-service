//First, we need to let our app know we're going to use Express.
const express = require('express');
//using the Express module
const app = express();

//When you use the cors module in Javascript and provide it the origin argument as http://localhost:8000 it means that the domain localhost can acess your backend resources and get data from it while other domains can't. If, for example, the domain stackoverflow.com tried to scrape data from your server it would be blocked the cors module.
const cors = require('cors')
app.use(cors());

//defining routes : Now, let's make a simple route. This is like telling our app how to say 'Hello World' when someone visits the home page:
app.get('/',(req,res)=>{
    res.send('Arithmetic service - Hello World!');
});

app.get('/add/:n/:m',(req,res) => {
    res.json(Number(req.params.n)+Number(req.params.m))
});
//Last step, we pick a port for our app to listen on and turn it on:
const port = 3000;
app.listen(port);