import React, { Component } from 'react';
import '../styles/PersonalInfo.css';

class PersonalInfo extends Component {
  constructor() {
    super();
    this.state = {
      fullName: 'John Doe',
      profession: 'UX Designer',
      location: 'London, UK',
      editMode: false,
    };
  }

  toggleEditMode = () => {
    this.setState((prevState) => ({
      editMode: !prevState.editMode,
    }));
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { fullName, profession, location, editMode } = this.state;

    return (
      <div className="PersonalInfo">
        <h1 className="PersonalInfo__fullName">{fullName}</h1>
        <p className="PersonalInfo__profession">{profession}</p>
        <p className="PersonalInfo__location">{location}</p>
        {editMode ? (
          <form className="PersonalInfo__form">
            <h2>Personal Info</h2>
            <label htmlFor="fullName">Full Name</label>
            <input
              name="fullName"
              id="fullName"
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={this.handleChange}
            />
            <label htmlFor="profession">Profession</label>
            <input
              name="profession"
              id="profession"
              type="text"
              placeholder="Profession"
              value={profession}
              onChange={this.handleChange}
            />
            <label htmlFor="location">Location</label>
            <input
              name="location"
              id="location"
              type="text"
              placeholder="Location"
              value={location}
              onChange={this.handleChange}
            />
            <button onClick={this.toggleEditMode}>Close</button>
          </form>
        ) : (
          <button
            className="PersonalInfo__editBtn"
            onClick={this.toggleEditMode}
          >
            Edit
          </button>
        )}
      </div>
    );
  }
}

export default PersonalInfo;
