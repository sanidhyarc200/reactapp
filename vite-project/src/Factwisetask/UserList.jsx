import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const UserCard = ({ user, isExpanded, onToggle, onSave, onDelete }) => {
  const { id, first, last, dob, gender, description, country } = user;

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const currentDate = new Date();
    return currentDate.getFullYear() - birthDate.getFullYear();
  };

  const [editedUser, setEditedUser] = useState(user);
  const [isEditing, setIsEditing] = useState(false);

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    onSave(id, editedUser);
    setIsEditing(false);
  };

  const handleDelete = () => {
    const shouldDelete = window.confirm('Are you sure you want to delete this user?');
    if (shouldDelete) {
      onDelete(id);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <div className={`card ${isExpanded ? 'expanded' : ''}`}>
      <div className="card-header" id={`heading-${id}`}>
        <h5 className="mb-0">
          <button
            className={`btn btn-link ${isExpanded ? '' : 'collapsed'}`}
            type="button"
            onClick={() => onToggle(id)}
            aria-expanded={isExpanded ? 'true' : 'false'}
            aria-controls={`collapse-${id}`}
          >
            {`${first} ${last}`}
          </button>
        </h5>
      </div>
      <div id={`collapse-${id}`} className={`collapse ${isExpanded ? 'show' : ''}`} aria-labelledby={`heading-${id}`} data-parent="#accordion">
        <div className="card-body">
          <div className="form-group">
            <div className="d-flex justify-content-between">
              <div>
                <label htmlFor={`age-${id}`}>Age</label>
                <div className="rounded border p-2" id={`age-${id}`}>
                  {calculateAge(dob)} years old
                </div>
              </div>
              <div>
                <label htmlFor={`gender-${id}`}>Gender</label>
                <div className="rounded border p-2" id={`gender-${id}`}>
                  {gender}
                </div>
              </div>
              <div>
                <label htmlFor={`country-${id}`}>Country</label>
                <div className="rounded border p-2" id={`country-${id}`}>
                  {country}
                </div>
              </div>
            </div>
          </div>
          {isEditing ? (
            <div className="form-group">
              <label htmlFor={`description-${id}`}>Description</label>
              <textarea
                className="form-control"
                id={`description-${id}`}
                rows="3"
                name="description"
                value={editedUser.description}
                onChange={handleInputChange}
              />
            </div>
          ) : (
            <div className="form-group">
              <label htmlFor={`description-${id}`}>Description</label>
              <div className="rounded border p-2" id={`description-${id}`}>
                {description}
              </div>
            </div>
          )}
          {isEditing ? (
            <div className="d-flex justify-content-end">
              <button className="btn btn-icon btn-primary" onClick={handleSave}>
                <FaEdit />
              </button>
              <button className="btn btn-icon btn-danger" onClick={handleDelete}>
                <FaTrashAlt />
              </button>
            </div>
          ) : (
            <div className="d-flex justify-content-end">
              <button className="btn btn-icon btn-primary" onClick={handleToggleEdit}>
                <FaEdit />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const UserList = ({ users }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCardId, setExpandedCardId] = useState(null);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setExpandedCardId(null); // Collapse any expanded card when performing a search
  };

  const handleCardToggle = (id) => {
    setExpandedCardId((prevId) => (prevId === id ? null : id)); // Toggle the expanded state of the card
  };

  const handleSave = (id, editedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? editedUser : user
    );
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  const filteredUsers = users.filter((user) =>
    `${user.first} ${user.last}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container" style={{ width: '50vw' }}>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div id="accordion">
        {filteredUsers.map((user) => (
          <div key={user.id} className="card mb-3">
            <UserCard
              user={user}
              isExpanded={user.id === expandedCardId}
              onToggle={handleCardToggle}
              
              
              onSave={handleSave}
              onDelete={handleDelete}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
