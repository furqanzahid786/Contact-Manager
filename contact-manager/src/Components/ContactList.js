import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {

    console.log(props)
    const deletecontacthandler=(id)=>
    {
        props.getcontactid(id)
    }


    const rendercontactlist=props.contacts.map((contact)=>
    {
        return(
            <ContactCard contact={contact}
            clickhander={deletecontacthandler}
            key={contact.id}/>
        );
    })
    return(
        <div class="main">
            <h2>Contact List 
                <Link to="/add"> 
                <button className="ui button blue right" style={{marginLeft:"200px",textAlign:"center"}}>Add Contact</button>
                </Link>
               
            </h2>
        <div className="ui celled list">{rendercontactlist}</div>
        </div>
    );
};

export default ContactList;