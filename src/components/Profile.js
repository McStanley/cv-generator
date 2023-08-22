import React, { useState } from 'react';
import '../styles/Profile.css';

const Profile = () => {
  const [text, setText] = useState(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper.'
  );
  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = () => {
    setEditMode((prevEditMode) => !prevEditMode);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const form = (
    <form>
      <h2>Profile</h2>
      <textarea value={text} onChange={handleChange} />
      <button onClick={toggleEditMode}>Close</button>
    </form>
  );

  return (
    <React.Fragment>
      <div className="Profile">
        <div className="Profile__header">
          <h2>Profile</h2>
          <button className="Profile__editBtn" onClick={toggleEditMode}>
            Edit
          </button>
        </div>
        <div className="line--long" />
        <p>{text}</p>
      </div>
      {editMode && <div className="CV__overlay">{form}</div>}
    </React.Fragment>
  );
};

export default Profile;
