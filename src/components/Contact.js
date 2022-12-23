import React, { Component } from 'react';
import '../styles/Contact.css';
import AvatarImg from '../assets/avatar.png';
import UploadImg from '../assets/upload.png';
import EnvelopeImg from '../assets/envelope.png';
import PhoneImg from '../assets/phone.png';
import LinkedInImg from '../assets/linkedin.png';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      image: null,
      email: 'john.doe@mail.com',
      phone: '+44 123 456 789',
      linkedIn: 'johndoe',
      editMode: false,
    };
  }

  handleImageChange = (e) => {
    this.setState({ image: e.target.files[0] });
  };

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
    const { image, email, phone, linkedIn, editMode } = this.state;
    const imageUrl = image ? URL.createObjectURL(image) : AvatarImg;

    const editBtn = (
      <button className="Contact__editBtn" onClick={this.toggleEditMode}>
        Edit
      </button>
    );

    const form = (
      <form className="Contact__form">
        <h2>Contact Info</h2>
        <label htmlFor="email">E-Mail</label>
        <input
          name="email"
          id="email"
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={this.handleChange}
        />
        <label htmlFor="phone">Phone</label>
        <input
          name="phone"
          id="phone"
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={this.handleChange}
        />
        <label htmlFor="linkedIn">LinkedIn</label>
        <input
          name="linkedIn"
          id="linkedIn"
          type="text"
          placeholder="LinkedIn"
          value={linkedIn}
          onChange={this.handleChange}
        />
        <button onClick={this.toggleEditMode}>Close</button>
      </form>
    );

    return (
      <div className="Contact">
        <div className="Contact__photoContainer">
          <img className="Contact__photo" src={imageUrl} alt="Avatar" />
          <label className="Contact__photoUpload" htmlFor="image-upload-button">
            <input
              id="image-upload-button"
              type="file"
              accept="image/*"
              onChange={this.handleImageChange}
              style={{ display: 'none' }}
            />
            <img src={UploadImg} alt="Person" />
          </label>
        </div>
        <div className="Contact__info">
          {email && (
            <div className="Contact__entry">
              <img src={EnvelopeImg} alt="" />
              <p>{email}</p>
            </div>
          )}
          {phone && (
            <div className="Contact__entry">
              <img src={PhoneImg} alt="" />
              <p>{phone}</p>
            </div>
          )}
          {linkedIn && (
            <div className="Contact__entry">
              <img src={LinkedInImg} alt="" />
              <p>www.linkedin.com/in/{linkedIn}</p>
            </div>
          )}
          {!editMode && editBtn}
        </div>
        {editMode && <div className="CV__overlay">{form}</div>}
      </div>
    );
  }
}

export default Contact;
