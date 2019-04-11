import React, { Component } from 'react';
import random from 'random-name';
import './styles.sass';

class Main extends Component {
  render() {
    const roles = [
      "Director",
      "Producer",
      "Co-Producer",
      "Film Editor",
      "Casting Director",
      "Screenwriter",
      "Post Supervisor",
      "Director of Photography",
      "Camera Operator",
      "1st Assistant Camera",
      "Special Effects Supervisor",
      "Actor"
    ];

    const duration = 4;

    function addDelay (someVal) {
      const fixedIndex = someVal + 1;
      const delay = fixedIndex * duration;
      const sarasa = fixedIndex === 1
          ?  `0s`
          : `${delay - duration}s`
      return sarasa;
    }

    const titles = roles.map((title, index) =>   
      <section
        className="title-block animate"
        key={index}
        style={{ animationDelay: addDelay(index), animationDuration: `${duration}s`}}
      >
        <h4 className="role">{title}</h4>
        <h2 className="name">{random.first()} {random.last()}</h2>
      </section>
    );
    return (
      <section className="main">
          {titles}
      </section>
    );
  }
}

export default Main;