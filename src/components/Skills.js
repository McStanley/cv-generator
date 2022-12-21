import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import '../styles/Skills.css';

class Skills extends Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: nanoid(),
          description: 'User experience',
          editMode: false,
        },
        {
          id: nanoid(),
          description: 'User interface',
          editMode: false,
        },
        {
          id: nanoid(),
          description: 'App design',
          editMode: false,
        },
        {
          id: nanoid(),
          description: 'Adaptive web design',
          editMode: false,
        },
      ],
    };
  }

  toggleEditMode = (id) => {
    const newSkills = this.state.skills.map((entry) => {
      if (entry.id === id) return { ...entry, editMode: !entry.editMode };
      return entry;
    });

    this.setState({
      skills: newSkills,
    });
  };

  handleAdd = () => {
    const newEntry = {
      id: nanoid(),
      description: '',
      editMode: true,
    };

    this.setState((prevState) => ({
      skills: [...prevState.skills, newEntry],
    }));
  };

  handleRemove = (id) => {
    const newSkills = this.state.skills.filter((entry) => entry.id !== id);
    this.setState({ skills: newSkills });
  };

  handleChange = (id, e) => {
    const { value } = e.target;
    const newSkills = this.state.skills.map((entry) => {
      if (entry.id === id) return { ...entry, description: value };
      return entry;
    });
    this.setState({ skills: newSkills });
  };

  render() {
    const skillElements = this.state.skills.map((entry) => {
      const entryBtns = (
        <div className="Skills__entryBtns">
          <button onClick={() => this.toggleEditMode(entry.id)}>Edit</button>
          <button onClick={() => this.handleRemove(entry.id)}>Remove</button>
        </div>
      );

      const form = (
        <form className="Skills__form">
          <label htmlFor="description">Skill</label>
          <input
            name="description"
            id="description"
            type="text"
            value={entry.description}
            onChange={(e) => this.handleChange(entry.id, e)}
          />
          <button onClick={() => this.toggleEditMode(entry.id)}>Close</button>
        </form>
      );

      return (
        <React.Fragment>
          <li className="Skills__entry" key={entry.id}>
            {entry.description}
            {!entry.editMode && entryBtns}
          </li>
          {entry.editMode && form}
        </React.Fragment>
      );
    });

    return (
      <div className="Skills">
        <div className="Skills__header">
          <h2>Skills</h2>
          <button className="Skills__addBtn" onClick={this.handleAdd}>
            +
          </button>
        </div>
        <div className="line" />
        <ul className="Skills__list">{skillElements}</ul>
      </div>
    );
  }
}

export default Skills;
