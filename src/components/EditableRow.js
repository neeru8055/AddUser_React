import React from 'react'

const EditableRow = ({
    editFormData,
    handleEditFormChange,
    handleCancelClick,
}) => {
    return (
       <tr>
           <td>
           <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name"
          value={editFormData.fullName}
          onChange={handleEditFormChange}/>
           </td>
           <td>
           <input
          type="text"
          name="userName"
          required="required"
          placeholder="Enter an username"
          value={editFormData.userName}
          onChange={handleEditFormChange}/>
           </td>
           <td>
           <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email"
          value={editFormData.email}
          onChange={handleEditFormChange}/>
           </td>
           <td>
           <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phoneno"
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}/>
           </td>
           <td>
           <input
          type="text"
          name="website"
          required="required"
          placeholder="Enter a website"
          value={editFormData.website}
          onChange={handleEditFormChange}/>
           </td>
           <td>
               <button type="submit" id="btn_save">Save</button>
               <button type="button" id="btn_cancel" onClick={handleCancelClick}>
          Cancel
        </button>
           </td>
           </tr>
    )
}

export default EditableRow
