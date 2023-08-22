import React from 'react';
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import Skills from './Skills';
import Contact from './Contact';
import Profile from './Profile';
import Experience from './Experience';
import '../styles/CV.css';

const CV = () => {
  return (
    <div className="CV">
      <aside className="CV__aside">
        <PersonalInfo />
        <Education />
        <Skills />
      </aside>
      <main className="CV__main">
        <Contact />
        <Profile />
        <Experience />
      </main>
    </div>
  );
};

export default CV;
