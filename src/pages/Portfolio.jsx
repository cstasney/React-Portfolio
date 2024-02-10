import { useState } from 'react';
import Project from "../components/Project";
import Row from 'react-bootstrap/Row'

function Portfolio() {
  const [projects] = useState([
    {
      name: 'diveBar',
      description: 'MYSQL and Node',
      title: 'Dive Bar',
      gitHub: 'https://github.com/JackStras/Dive-Bar',
      live: 'https://github.com/JackStras/Dive-Bar'
    },
    {
      name: 'bookSearch',
      description: 'MERN Stack',
      gitHub: "https://github.com/cstasney/Book-Search-Engine",
      title: 'Book Search Engine',
      live: 'https://stasney-book-search-dc63d08f8f2b.herokuapp.com/'
    },
    {
      name: 'socialNetwork',
      description: 'Mongo DB and RestFul API',
      gitHub: "https://github.com/cstasney/Social-Network--API",
      title: "Social Network API"
    },
    {
      name: 'employeeTracker',
      description: 'SQL and Sequelize',
      gitHub: "https://github.com/cstasney/Employee-Tracker",
      title: "SQL Employee Tracker"
    },
    {
      name: 'passwordGenerator',
      description: 'JS',
      gitHub: "https://github.com/cstasney/Module-3-Challenge",
      title: "Password Generator"
    },
    {
      name: 'eCommerce',
      description: 'MYSQL',
      gitHub: "https://github.com/cstasney/E-Commerce-Back-End",
      title: "MySql E-Commerce Database"
    },

  ]);

return (
  <Row>
    {projects.map((project, idx) => (
      <Project
        project={project}
        key={"project" + idx}
      />
    ))}
  </Row>
);
}

export default Portfolio;
