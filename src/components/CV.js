import React, { Component } from 'react';
import '../styles/CV.css';
import PersonalInfo from './PersonalInfo';

class CV extends Component {
  render() {
    return (
      <div className="CV">
        <aside className="CV__aside">
          <PersonalInfo />
        </aside>
        <main className="CV__main"></main>
      </div>
    );
  }
}

export default CV;
