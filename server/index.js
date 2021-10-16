const express = require('express')
const mongoose = require('mongoose')
const app = express()

const ContactModel = require("./models/Contact")

app.use(express.json());

mongoose.connect('mongodb+srv://admin:password12345@contacty.ldc9f.mongodb.net/contact?retryWrites=true&w=majority',{
    useNewUrlParser: true,
});

app.get('/', async (req, res)=>{
    const contact = new ContactModel({
        contactFirstname: "Atoke", 
        contactLastname : "Libun",
        contactEmail : "a.Lib@gmai.com"
    });

    res.send("Success");
    try {
        await contact.save();
    }catch(err){
        console.log(err);
    }

});

app.listen(3001,()=>{
    console.log('Server running on port 3001');
});