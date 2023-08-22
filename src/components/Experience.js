import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import '../styles/Experience.css';

const Experience = () => {
  const [experience, setExperience] = useState([
    {
      id: nanoid(),
      position: 'Job position',
      company: 'Company',
      country: 'Country',
      start: '2021',
      end: 'present',
      description:
        'ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Purus ut faucibus pulvinar elementum. Eget aliquet nibh praesent tristique magna sit. Scelerisque purus semper eget duis at tellus at.',
      editMode: false,
    },
    {
      id: nanoid(),
      position: 'Job position',
      company: 'Company',
      country: 'Country',
      start: '2021',
      end: 'present',
      description:
        'ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Purus ut faucibus pulvinar elementum. Eget aliquet nibh praesent tristique magna sit. Scelerisque purus semper eget duis at tellus at.',
      editMode: false,
    },
  ]);

  const toggleEditMode = (id) => {
    const newExperience = experience.map((entry) => {
      if (entry.id === id) return { ...entry, editMode: !entry.editMode };
      return entry;
    });

    setExperience(newExperience);
  };

  const handleAdd = () => {
    const newEntry = {
      id: nanoid(),
      position: '',
      company: '',
      country: '',
      start: '',
      end: '',
      description: '',
      editMode: true,
    };

    setExperience((prevExperience) => [...prevExperience, newEntry]);
  };

  const handleRemove = (id) => {
    const newExperience = experience.filter((entry) => entry.id !== id);
    setExperience(newExperience);
  };

  const handleChange = (id, e) => {
    const { name, value } = e.target;
    const newExperience = experience.map((entry) => {
      if (entry.id === id) return { ...entry, [name]: value };
      return entry;
    });

    setExperience(newExperience);
  };

  const experienceElements = experience.map((entry) => {
    const entryBtns = (
      <div className="Experience__entryBtns">
        <button onClick={() => toggleEditMode(entry.id)}>Edit</button>
        <button onClick={() => handleRemove(entry.id)}>Remove</button>
      </div>
    );

    const form = (
      <form>
        <label htmlFor="position">Job position</label>
        <input
          name="position"
          id="position"
          type="text"
          value={entry.position}
          onChange={(e) => handleChange(entry.id, e)}
        />
        <label htmlFor="company">Company</label>
        <input
          name="company"
          id="company"
          type="text"
          value={entry.company}
          onChange={(e) => handleChange(entry.id, e)}
        />
        <label htmlFor="country">Country</label>
        <input
          name="country"
          id="country"
          type="text"
          value={entry.country}
          onChange={(e) => handleChange(entry.id, e)}
        />
        <label htmlFor="start">Start</label>
        <input
          name="start"
          id="start"
          type="text"
          value={entry.start}
          onChange={(e) => handleChange(entry.id, e)}
        />
        <label htmlFor="end">End</label>
        <input
          name="end"
          id="end"
          type="text"
          value={entry.end}
          onChange={(e) => handleChange(entry.id, e)}
        />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          value={entry.description}
          onChange={(e) => handleChange(entry.id, e)}
        />
        <button onClick={() => toggleEditMode(entry.id)}>Close</button>
      </form>
    );

    return (
      <React.Fragment key={entry.id}>
        <div className="Experience__entry">
          <h3>{entry.position}</h3>
          <div className="Experience__entryRow">
            <p>
              {entry.company}, {entry.country}
            </p>
            <p className="Experience__entryTimespan">
              {entry.start} – {entry.end}
            </p>
          </div>
          <p>{entry.description}</p>
          {!entry.editMode && entryBtns}
        </div>
        {entry.editMode && <div className="CV__overlay">{form}</div>}
      </React.Fragment>
    );
  });

  return (
    <div className="Experience">
      <div className="Experience__header">
        <h2>Experience</h2>
        <button className="Experience__addBtn" onClick={handleAdd}>
          +
        </button>
      </div>
      <div className="line--long" />
      {experienceElements}
    </div>
  );
};

export default Experience;
