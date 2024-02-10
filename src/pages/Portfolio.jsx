import { useState } from 'react';
import Project from "../components/Project";

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
    // {
    //   name: 'runBuddy',
    //   description: 'HTML/CSS',
    //   link: "https://github.com",
    //   repo: "https://github.com"
    // },
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
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
