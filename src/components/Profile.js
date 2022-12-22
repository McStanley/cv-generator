import React, { Component } from 'react';
import '../styles/Profile.css';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper.',
      editMode: false,
    };
  }

  toggleEditMode = () => {
    this.setState((prevState) => ({
      editMode: !prevState.editMode,
    }));
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    const { text, editMode } = this.state;

    const editBtn = (
      <button className="Profile__editBtn" onClick={this.toggleEditMode}>
        Edit
      </button>
    );

    const form = (
      <form className="Profile__form">
        <h2>Profile</h2>
        <textarea value={text} onChange={this.handleChange} />
        <button onClick={this.toggleEditMode}>Close</button>
      </form>
    );

    return (
      <div className="Profile">
        <div className="Profile__header">
          <h2>Profile</h2>
          {!editMode && editBtn}
        </div>
        <div className="line--long" />
        <p>{text}</p>
        {editMode && form}
      </div>
    );
  }
}

export default Profile;
