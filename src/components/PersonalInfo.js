import React, { useState } from 'react';
import '../styles/PersonalInfo.css';

const PersonalInfo = () => {
  const [fullName, setFullName] = useState('John Doe');
  const [profession, setProfession] = useState('UX Designer');
  const [location, setLocation] = useState('London, UK');
  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = () => {
    setEditMode((prevEditMode) => !prevEditMode);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const setters = {
      fullName: setFullName,
      profession: setProfession,
      location: setLocation,
    };

    setters[name](value);
  };

  const editBtn = (
    <button className="PersonalInfo__editBtn" onClick={toggleEditMode}>
      Edit
    </button>
  );

  const form = (
    <form>
      <h2>Personal Info</h2>
      <label htmlFor="fullName">Full Name</label>
      <input
        name="fullName"
        id="fullName"
        type="text"
        placeholder="Full Name"
        value={fullName}
        onChange={handleChange}
      />
      <label htmlFor="profession">Profession</label>
      <input
        name="profession"
        id="profession"
        type="text"
        placeholder="Profession"
        value={profession}
        onChange={handleChange}
      />
      <label htmlFor="location">Location</label>
      <input
        name="location"
        id="location"
        type="text"
        placeholder="Location"
        value={location}
        onChange={handleChange}
      />
      <button onClick={toggleEditMode}>Close</button>
    </form>
  );

  return (
    <React.Fragment>
      <div className="PersonalInfo">
        <h1 className="PersonalInfo__fullName">{fullName}</h1>
        <p className="PersonalInfo__profession">{profession}</p>
        <p className="PersonalInfo__location">{location}</p>
        {!editMode && editBtn}
      </div>
      {editMode && <div className="CV__overlay">{form}</div>}
    </React.Fragment>
  );
};

export default PersonalInfo;
