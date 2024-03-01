import React, { useState } from 'react'
import "../app.css";
import {db} from "../firebase";

const Contact = () => {
    const [name,setName] = useState ("");
    const [idNumber,setIdNumber] = useState ("");
    const [phoneNumber,setPhoneNumber] = useState ("");

    const [loader,setloader] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        setloader(true)

        db.collection ('User_Details').add({
            Name: name,
            ID_Number: idNumber,
            Phone_Number: phoneNumber,
        })
        .then(() => {
            alert("Sign Up Successfully 👍")
            setloader(false);
        })
        .catch(error => {
            alert(error.message);
            setloader(false);
        });

        setName("");
        setIdNumber("");
        setPhoneNumber("");

    };

  return (
    <form className = "form" onSubmit = {handleSubmit}>
        <h1>
            Sign Up 🔔
        </h1>

        <label>Name</label>
        <input 
            placeholder = "Name"
            value = {name}
            onChange = {(e)=>setName (e.target.value)} 
        />

        <label>ID Number</label>
        <input 
            placeholder = "ID Number" 
            value = {idNumber}
            onChange = {(e)=>setIdNumber (e.target.value)} 
        />

        <label>Phone Number</label>
        <input 
            placeholder = "Phone Number" 
            value = {phoneNumber}
            onChange = {(e)=>setPhoneNumber (e.target.value)} 
        />

        <button 
            type="submit" 
            style={{background : loader ? "#ccc" : "rgb(2,2,110)"}}
        >            
            Submit
        
        </button>      
    </form>
  );
};

export default Contact;


