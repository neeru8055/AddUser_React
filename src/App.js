import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";

const App = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: '',
    userName: '',
    email: '',
    phoneNumber: '',
    website: '',
  });

  const [editFormData,setEditFormData]=useState({
    fullName: '',
    userName: '',
    email: '',
    phoneNumber: '',
    website: '',
  })

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event)=>{
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData={ ...editFormData};
    newFormData[fieldName] = fieldValue;
    
    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      userName: addFormData.userName,
      email: addFormData.email,
      phoneNumber: addFormData.phoneNumber,
      website: addFormData.website,
    };

    const newContacts = [...contacts, newContact]
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      userName: editFormData.userName,
      email: editFormData.email,
      phoneNumber: editFormData.phoneNumber,
      website: editFormData.website,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };


  const handleEditClick = (event,contact)=>{
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      userName: contact.userName,
      email: contact.email,
      phoneNumber: contact.phoneNumber,
      website: contact.website
    }
    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };


  return (
    <div className="app-container">
      <h1>ADD U$ERS</h1>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="userName"
          required="required"
          placeholder="Enter an username"
          onChange={handleAddFormChange}
        />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email"
          onChange={handleAddFormChange}
        />
        <input
          type="number"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phoneno"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="website"
          required="required"
          placeholder="Enter a website"
          onChange={handleAddFormChange}
        />
        <br />
        <button type="submit" id="btn_delete"> Add </button>

      </form><br/><hr/>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <td><b>Name</b></td>
              <td><b>Username</b></td>
              <td><b>Email</b></td>
              <td><b>Phone</b></td>
              <td><b>Website</b></td>
              <td><b>Actions</b></td>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow 
                   editFormData={editFormData}
                   handleEditFormChange={handleEditFormChange}
                   handleCancelClick={handleCancelClick}
                    />
                ) : (
                  <ReadOnlyRow 
                  contact={contact} 
                  handleEditClick={handleEditClick}
                  handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
      
    </div>
  )
};
export default App