import React from 'react'

export const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (

    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.userName}</td>
      <td>{contact.email}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.website}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}>
          Edit
        </button>
        <button type="button" id="btn_delete" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>

  );
};
export default ReadOnlyRow;