import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import '../styles/Education.css';

class Education extends Component {
  constructor() {
    super();
    this.state = {
      education: [
        {
          id: nanoid(),
          course: 'Course 1',
          university: 'University',
          startYear: 2016,
          endYear: 2018,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Risus commodo viverra maecenas accumsan lacus.Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper.',
          editMode: false,
        },
        {
          id: nanoid(),
          course: 'Course 2',
          university: 'University',
          startYear: 2016,
          endYear: 2018,
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Risus commodo viverra maecenas accumsan lacus.Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper.',
          editMode: false,
        },
      ],
    };
  }

  toggleEditMode = (id) => {
    const newEducation = this.state.education.map((entry) => {
      if (entry.id === id) return { ...entry, editMode: !entry.editMode };
      return entry;
    });

    this.setState({
      education: newEducation,
    });
  };

  handleAdd = () => {
    const newEntry = {
      id: nanoid(),
      course: '',
      university: '',
      startYear: '',
      endYear: '',
      description: '',
      editMode: true,
    };

    this.setState((prevState) => ({
      education: [...prevState.education, newEntry],
    }));
  };

  handleRemove = (id) => {
    const newEducation = this.state.education.filter(
      (entry) => entry.id !== id
    );
    this.setState({ education: newEducation });
  };

  handleChange = (id, e) => {
    const { name, value } = e.target;
    const newEducation = this.state.education.map((entry) => {
      if (entry.id === id) return { ...entry, [name]: value };
      return entry;
    });
    this.setState({ education: newEducation });
  };

  render() {
    const educationElements = this.state.education.map((entry) => {
      return (
        <div className="Education__entry" key={entry.id}>
          <h3>{entry.course}</h3>
          <p>{entry.university}</p>
          <p>
            {entry.startYear} – {entry.endYear}
          </p>
          <p>{entry.description}</p>
          {entry.editMode ? (
            <form className="Education__form">
              <h2>Education</h2>
              <label htmlFor="course">Course</label>
              <input
                name="course"
                id="course"
                type="text"
                value={entry.course}
                onChange={(e) => this.handleChange(entry.id, e)}
              />
              <label htmlFor="university">University</label>
              <input
                name="university"
                id="university"
                type="text"
                value={entry.university}
                onChange={(e) => this.handleChange(entry.id, e)}
              />
              <label htmlFor="startYear">Start Year</label>
              <input
                name="startYear"
                id="startYear"
                type="number"
                value={entry.startYear}
                onChange={(e) => this.handleChange(entry.id, e)}
              />
              <label htmlFor="endYear">End Year</label>
              <input
                name="endYear"
                id="endYear"
                type="number"
                value={entry.endYear}
                onChange={(e) => this.handleChange(entry.id, e)}
              />
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                value={entry.description}
                onChange={(e) => this.handleChange(entry.id, e)}
              />
              <button onClick={() => this.toggleEditMode(entry.id)}>
                Close
              </button>
            </form>
          ) : (
            <div className="Education__entryBtns">
              <button onClick={() => this.toggleEditMode(entry.id)}>
                Edit
              </button>
              <button onClick={() => this.handleRemove(entry.id)}>
                Remove
              </button>
            </div>
          )}
        </div>
      );
    });
    return (
      <div className="Education">
        <div className="Education__header">
          <h2>Education</h2>
          <button className="Education__addBtn" onClick={this.handleAdd}>
            +
          </button>
        </div>
        <div className="line" />
        {educationElements}
      </div>
    );
  }
}

export default Education;
