import React, {useState,useEffect} from 'react';
import Axios from 'axios';
import "./ContactList.css";

export const ContactList= () =>{

    const [contactList, setContactList] = useState([]);

    useEffect(()=>{
        Axios.get("http://localhost:3001/read").then(   (response) => {
                console.log(response.data);
                setContactList(response.data)
            });
    }, []);

    return(
        <div>
            <h1>Contact List</h1> 
            <p>[Saved contacts display here]</p> 
            <a href="/">Add new contact</a>

            {contactList.map((val, key) => {
                return <div className="contactBox"> 
                            <h6> Firstname: {val.contactFirstname} </h6>
                            <h6> Lastname: {val.contactLastname} </h6>
                            <h6> Email: {val.contactEmail}</h6>
                    </div>
            })}
        </div>
    );
    
     }