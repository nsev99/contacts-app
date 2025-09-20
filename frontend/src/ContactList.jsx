import React from "react"
import "./App.css"

const ContactList = ({ contacts, updateContact, updateCallback }) => {
  const onDelete = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/delete_contact/${id}`, { method: "DELETE" })
      if (response.status === 200) {
        updateCallback()
      } else {
        console.error("Failed to delete")
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className="contact-container">
      <h2 className="contact-title">📇 Contact List</h2>
      <table className="contact-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th className="actions-col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length > 0 ? (
            contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.firstName}</td>
                <td>{contact.lastName}</td>
                <td>{contact.email}</td>
                <td className="actions">
                  <button className="btn btn-edit" onClick={() => updateContact(contact)}>Edit</button>
                  <button className="btn btn-delete" onClick={() => onDelete(contact.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="no-data">No contacts found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default ContactList
