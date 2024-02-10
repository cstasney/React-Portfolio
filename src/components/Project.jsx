import Card from 'react-bootstrap/Card';
import * as projects from '../assets'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Col from 'react-bootstrap/Col'



function Project({ project }) {
  const { name } = project;
  const projectImage = projects[name];
  return (
    <Col md={6} xs={12}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={projectImage} className="projectImage justify-content-center" />
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
          <Card.Text>
            {project.description}
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <ButtonGroup aria-label="Basic example">
            <Button href={`${project.gitHub}`} variant="secondary">GitHub</Button>
            <Button variant="secondary">Live App</Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Project;