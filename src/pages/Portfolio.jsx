import { useState } from 'react';
import Project from "../components/Project";
import Row from 'react-bootstrap/Row'

function Portfolio() {
  const [projects] = useState([
    {
      name: 'diveBar',
      description: 'MYSQL and Node',
      link: "https://github.com",
      repo: "https://github.com",
      title: 'Dive Bar',
      gitHub: 'https://github.com/JackStras/Dive-Bar'
    },
    {
      name: 'bookSearch',
      description: 'MERN Stack',
      link: "https://github.com",
      repo: "https://github.com",
      title: 'Book Search Engine'
    },
    {
      name: 'socialNetwork',
      description: 'Mongo DB and RestFul API',
      link: "https://github.com",
      repo: "https://github.com",
      title: "Social Network API"
    },
    // {
    //   name: 'ledWall',
    //   description: 'Node/IoT',
    //   link: "https://github.com",
    //   repo: "https://github.com"
    // },
    // {
    //   name: 'calculator',
    //   description: 'React/JavaScript/CSS',
    //   link: "https://github.com",
    //   repo: "https://github.com"
    // },
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
