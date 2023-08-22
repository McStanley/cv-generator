import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import '../styles/Education.css';

const Education = () => {
  const [education, setEducation] = useState([
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
  ]);

  const toggleEditMode = (id) => {
    const newEducation = education.map((entry) => {
      if (entry.id === id) return { ...entry, editMode: !entry.editMode };
      return entry;
    });

    setEducation(newEducation);
  };

  const handleAdd = () => {
    const newEntry = {
      id: nanoid(),
      course: '',
      university: '',
      startYear: '',
      endYear: '',
      description: '',
      editMode: true,
    };

    setEducation((prevEducation) => [...prevEducation, newEntry]);
  };

  const handleRemove = (id) => {
    const newEducation = education.filter((entry) => entry.id !== id);
    setEducation(newEducation);
  };

  const handleChange = (id, e) => {
    const { name, value } = e.target;
    const newEducation = education.map((entry) => {
      if (entry.id === id) return { ...entry, [name]: value };
      return entry;
    });

    setEducation(newEducation);
  };

  const educationElements = education.map((entry) => {
    const entryBtns = (
      <div className="Education__entryBtns">
        <button onClick={() => toggleEditMode(entry.id)}>Edit</button>
        <button onClick={() => handleRemove(entry.id)}>Remove</button>
      </div>
    );

    const form = (
      <form>
        <h2>Education</h2>
        <label htmlFor="course">Course</label>
        <input
          name="course"
          id="course"
          type="text"
          value={entry.course}
          onChange={(e) => handleChange(entry.id, e)}
        />
        <label htmlFor="university">University</label>
        <input
          name="university"
          id="university"
          type="text"
          value={entry.university}
          onChange={(e) => handleChange(entry.id, e)}
        />
        <label htmlFor="startYear">Start Year</label>
        <input
          name="startYear"
          id="startYear"
          type="number"
          value={entry.startYear}
          onChange={(e) => handleChange(entry.id, e)}
        />
        <label htmlFor="endYear">End Year</label>
        <input
          name="endYear"
          id="endYear"
          type="number"
          value={entry.endYear}
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
        <div className="Education__entry">
          <h3>{entry.course}</h3>
          <p>{entry.university}</p>
          <p>
            {entry.startYear} – {entry.endYear}
          </p>
          <p>{entry.description}</p>
          {!entry.editMode && entryBtns}
        </div>
        {entry.editMode && <div className="CV__overlay">{form}</div>}
      </React.Fragment>
    );
  });

  return (
    <div className="Education">
      <div className="Education__header">
        <h2>Education</h2>
        <button className="Education__addBtn" onClick={handleAdd}>
          +
        </button>
      </div>
      <div className="line" />
      {educationElements}
    </div>
  );
};

export default Education;
