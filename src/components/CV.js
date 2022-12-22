import React, { Component } from 'react';
import '../styles/CV.css';
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import Skills from './Skills';
import Contact from './Contact';
import Profile from './Profile';
import Experience from './Experience';

class CV extends Component {
  render() {
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
  }
}

export default CV;
