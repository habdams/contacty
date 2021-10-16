const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const ContactModel = require("./models/Contact");

app.use(express.json());
app.use(cors()); 

mongoose.connect(
  "mongodb+srv://admin:password12345@contacty.ldc9f.mongodb.net/contact?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.post("/insert", async (req, res) => {
    
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
  
    const contact = new ContactModel({
      contactFirstname: firstName,
      contactLastname: lastName,
      contactEmail: email,
    });
  
    res.send("Success");
    try {
      await contact.save();
    } catch (err) {
      console.log(err);
    }
  });


  app.get("/read", async (req, res) => {
    
    ContactModel.find({},(err, result)=>{
        if(err){
            res.send(err)
        }

        res.send(result);
    });

  });

app.listen(3001, () => {
  console.log("Server running on port 3001...");
});
