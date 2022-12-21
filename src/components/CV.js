import React, { Component } from 'react';
import '../styles/CV.css';
import PersonalInfo from './PersonalInfo';
import Education from './Education';

class CV extends Component {
  render() {
    return (
      <div className="CV">
        <aside className="CV__aside">
          <PersonalInfo />
          <Education />
        </aside>
        <main className="CV__main"></main>
      </div>
    );
  }
}

export default CV;
