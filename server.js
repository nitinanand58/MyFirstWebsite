const express = require('express');
const log = console.log;
const app = express();
const path = require('path');
const bodyparser = require("body-parser");
const mongoose = require('mongoose');
const { strict } = require('assert');
mongoose.connect('mongodb://localhost/torrenttissues', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
const PORT = 80;

const quotationSchema = new mongoose.Schema({
    name: String,
    phone: String,
    address: String,
    email: String,
    requirements: String,
    time: String,
});

const quotation = mongoose.model('quotation', quotationSchema);

app.post('/quotation', (req, res) =>{
    let quotationdata = new quotation({...req.body,time: new Date()});
    quotationdata.save().then(()=>{
        res.status(200).sendFile(path.join(__dirname, 'html', 'submit.html'));
    }).catch(()=>{
        res.status(400).send("An Error occured, kindly try again")
    })
   
});



const orderSchema = new mongoose.Schema({
    name: String,
    phone: String,
    address: String,
    email: String,
    specifications: String,
    time: String,
});

const order = mongoose.model('order', orderSchema);

app.post('/order', (req, res) =>{
    var orderdata = new order({...req.body,time: new Date()});
    orderdata.save().then(()=>{
        res.status(200).sendFile(path.join(__dirname, 'html', 'submit.html'));
    }).catch(()=>{
        res.status(400).send("An Error occured, kindly try again")
    })
    
})

const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    address: String,
    email: String,
    concern: String,
    time: String,
});

const contact = mongoose.model('contact', contactSchema);

app.post('/contact', (req, res) =>{
    var contactdata = new contact({...req.body,time: new Date()});
    contactdata.save().then(()=>{
        res.status(200).sendFile(path.join(__dirname, 'html', 'submit.html'));
    }).catch(()=>{
        res.status(400).send("An Error occured, kindly try again")
    })
    
});





app.use(express.static(path.join(__dirname)));

app.get('/index.html', (req, res) => {

    res.status(200).sendFile(path.join(__dirname, 'html', 'index.html'));

});


app.listen(PORT, () => log('Server is running on PORT, ', 80));

