import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import '../styles/Skills.css';

const Skills = () => {
  const [skills, setSkills] = useState([
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
  ]);

  const toggleEditMode = (id) => {
    const newSkills = skills.map((entry) => {
      if (entry.id === id) return { ...entry, editMode: !entry.editMode };
      return entry;
    });

    setSkills(newSkills);
  };

  const handleAdd = () => {
    const newEntry = {
      id: nanoid(),
      description: '',
      editMode: true,
    };

    setSkills((prevSkills) => [...prevSkills, newEntry]);
  };

  const handleRemove = (id) => {
    const newSkills = skills.filter((entry) => entry.id !== id);
    setSkills(newSkills);
  };

  const handleChange = (id, e) => {
    const { value } = e.target;
    const newSkills = skills.map((entry) => {
      if (entry.id === id) return { ...entry, description: value };
      return entry;
    });

    setSkills(newSkills);
  };

  const skillElements = skills.map((entry) => {
    const entryBtns = (
      <div className="Skills__entryBtns">
        <button onClick={() => toggleEditMode(entry.id)}>Edit</button>
        <button onClick={() => handleRemove(entry.id)}>Remove</button>
      </div>
    );

    const form = (
      <form>
        <label htmlFor="description">Skill</label>
        <input
          name="description"
          id="description"
          type="text"
          value={entry.description}
          onChange={(e) => handleChange(entry.id, e)}
        />
        <button onClick={() => toggleEditMode(entry.id)}>Close</button>
      </form>
    );

    return (
      <React.Fragment key={entry.id}>
        <li className="Skills__entry">
          {entry.description}
          {!entry.editMode && entryBtns}
        </li>
        {entry.editMode && <div className="CV__overlay">{form}</div>}
      </React.Fragment>
    );
  });

  return (
    <div className="Skills">
      <div className="Skills__header">
        <h2>Skills</h2>
        <button className="Skills__addBtn" onClick={handleAdd}>
          +
        </button>
      </div>
      <div className="line" />
      <ul className="Skills__list">{skillElements}</ul>
    </div>
  );
};

export default Skills;
