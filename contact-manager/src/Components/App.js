import "./App.css";
import React from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { useState } from "react";
import { useEffect } from "react";
import { v4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactDetails from "./ContactDetails";


function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addcontacthandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: v4(), ...contact }]);
  };

  const RemoveContactHandler = (id) => {
    const newcontactlist = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newcontactlist);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
      <Header />
        <Routes> 
          <Route exact path="/" Component={()=><ContactList contacts={contacts} getcontactid={RemoveContactHandler}/>}/> 
          <Route exact path="/add" Component={()=><AddContact addcontacthandler={addcontacthandler}/>}/>
          <Route path="/contact/:id" Component={ContactDetails}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
