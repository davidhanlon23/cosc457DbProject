
// 'use strict'
// const mongo = require('mongodb');
// const path = require('path');
// const nodemailer = require('nodemailer');

// module.exports = function (ctx) {

//     // extract context from passed in object
//     const db = ctx.dbConnection.db('exampledb'), 
//         server = ctx.server;
    
//     // assign collection to variable for further use
//     const collection = db.collection('requests');

//     /* test api page. */
//     server.get('/api', function (req, res) { 
//         res.send('Express REST API');
//     });

//     /** Create */
//     server.post('/api/requests', (req, res) => {
//         // extract data from body and add timestamps
//         //const data = { ...req.body, created: new Date(), updated: new Date() }; 
//         const data = Object.assign({}, req.body, {
//             checked: false,
//             created: new Date(),
//             updated: new Date()
//         });
        
//         // insert one object into requests collection
//         collection.insertOne(data)
//             .then(doc => {
//                 var transporter = nodemailer.createTransport({
//                     host: 'smtp.gmail.com',
//                     port: 465,
//                     secure: true,
//                     auth: {
//                         user: 'towsonnodemailer@gmail.com',
//                         pass: 'Node@towson'
//                     }
//                 });
//                 var mailOptions = {
//                     from: '"David Hanlon" <towsonnodemailer@gmail.com>',
//                     to: req.body.email, 
//                     subject: 'Success',
//                     text: 'We have recieved your request form! A member of our team will reach out soon!',
//                 };
//                 transporter.sendMail(mailOptions, function (error, info) {
//                     if(error) {
//                         return console.log(error);
//                     }
//                     console.log('Message sent successfully');
//                 });
//                 res.status(201).redirect('/thank-you');
//             })
//             .catch(err => res.status(500).send(err));
//     });
   

//     /* Read */
//     server.get('/api/requests', (req, res) => {
//         let query = req.query || {};

//         // find requests and convert to array (with optional query)
//         collection.find(query).toArray()
//             .then(docs => res.status(200).send(docs))
//             .catch(err => res.status(500).send(err));
//     });
    
//     /* Update */
//     server.put('/api/requests/:id', (req, res) => {
//         const o_id = new mongo.ObjectID(req.params.id);
//         console.log(req.params.id);
//         console.log(req.body);
//         // extract data from body and add timestamps
//         const data = Object.assign({}, req.body, {
//             updated: new Date(),
       
//         });
    
//         // build out findOneAndUpdate variables to keep things organized
//         let query = { _id: o_id },
//             body = { $set: data },
//             opts = { returnOriginal: false, upsert: false }
   
//         // find and update document based on passed in id (via route)
//         collection.findOneAndUpdate(query, body, opts)

//             .then(doc => res.send(204))
//             .catch(err => res.status(500).send(err));
//     });
    
//     /* Delete */
//     server.delete('/api/requests/:id', (req, res) => {
//         const o_id = new mongo.ObjectID(req.params.id);
//         console.log(o_id);
//         // remove one document based on passed in id (via route)
//         collection.findOneAndDelete({_id: o_id})
//             .then(doc => res.status(200).send(doc))
//             .catch(err => res.status(500).send(err));
//     });
    
//     // The "catchall" handler: for any request that doesn't
//     // match one above, send back React's index.html file.
//     server.get('*', (req, res) => {
//         res.sendFile(path.join(__dirname, 'client/build/index.html')); 
//     });
// }