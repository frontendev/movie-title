import React from 'react';
import './styles.sass';

class Sidebar extends React.Component {
  render() {
      const numbers =  [
        "Sed pretium",
        "Donec euismod",
        "Cras lobortis blandit sapien",
        "Suspendisse vel urna sed odio laoreet posuere",
        "Vestibulum luctus congue",
        "Etiam tincidunt leo purus",
        "Etiam tincidunt malesuada posuere",
        "Proin ut ligula et est"
      ];
      const doubled = numbers.map((number) => <li>{number}</li>);
    return (
      <aside className="sidebar">
        <header>
          <a href="/" className="btn-back">
            <i className="fas fa-angle-left"></i> <span>Back to the future</span>
          </a>
          <h2>Nulla facilisi</h2>
          <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum mauris leo, sit amet consequat nunc viverra a. Etiam lacinia nisl enim, sed suscipit libero laoreet id.</p>
        </header>
        <section className="activities">
          <ul className="activity-list">
            {doubled}
          </ul>
        </section>
      </aside>
    );
  }
}

export default Sidebar;