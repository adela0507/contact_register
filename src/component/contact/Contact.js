import React, {useState} from "react";
import ContactForm from "../contactForm/ContactForm";
import ContactList from "../contactList/ContactList";

function Contact(){
    const [contact,setContact]=useState({});
    

    return(
        <div className="container">
            <div className="box">
                <ContactList contact={contact}/>
                <ContactForm contact={contact} addContacts={setContact}/>
            </div>
        </div>
    )
}

export default Contact