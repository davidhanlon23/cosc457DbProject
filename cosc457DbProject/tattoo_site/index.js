
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/',(req,res)=> {
    res.send('Hello World!');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    // mongodb.connect(db_uri, (err,db) =>{
    //     if(err){
    //         console.log('Error occurred while trying to connect to MOngoDB', err);
    //         process.exit(1);
    //     }
        console.log(`Your application is running on http://localhost:${port}`);
        //require('./routes')({dbConnection:db, server: app})

    //});
});
