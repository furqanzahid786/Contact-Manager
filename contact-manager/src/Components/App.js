import './App.css';
import React from 'react'
import Header from './Header';
import AddContact from './AddContact'
import ContactList from './ContactList'
import { useState } from 'react';
import { useEffect } from 'react';


function App() {
   const LOCAL_STORAGE_KEY="contacts";
   const[contacts,setContacts]=useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
   );
  
   const addcontacthandler=(contact)=>
    {
      console.log(contact)
      setContacts([...contacts,contact])
    }

    useEffect(()=>
    {
       localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
    },[contacts])



  return (
    <div className='ui container'>
    <Header/>
    <AddContact addcontacthandler={addcontacthandler}/>
    <ContactList contacts={contacts}/> 
    </div>
  );
}

export default App;
