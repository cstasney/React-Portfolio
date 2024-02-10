import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import resume from '../assets/resume.pdf'

function Resume() {
    return (
        <div className='proficienciesText'>
            <div className="resume">
                <h1>Click <a className="resumeLink" href={resume} download={'Chris_Stasney_Resume'}>here</a> to download my resume</h1>
            </div>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header className='proficienciesText centered-header'>Front-End Proficiencies</Accordion.Header>
                    <Accordion.Body className='proficienciesText'>
                        <ListGroup.Item>HTML</ListGroup.Item>
                        <ListGroup.Item>CSS</ListGroup.Item>
                        <ListGroup.Item>JavaScript</ListGroup.Item>
                        <ListGroup.Item>jQuery</ListGroup.Item>
                        <ListGroup.Item>Bootstrap</ListGroup.Item>
                        <ListGroup.Item>React</ListGroup.Item>
                        <ListGroup.Item>Dynamic and responsive design</ListGroup.Item>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" >
                    <Accordion.Header className='proficienciesText centered-header'>Back-End Proficiencies</Accordion.Header>
                    <Accordion.Body className='proficienciesText'>
                        <ListGroup.Item>APIs</ListGroup.Item>
                        <ListGroup.Item>Node</ListGroup.Item>
                        <ListGroup.Item>Express</ListGroup.Item>
                        <ListGroup.Item>Mongo DB</ListGroup.Item>
                        <ListGroup.Item>MYSQL</ListGroup.Item>
                        <ListGroup.Item>Sequelize</ListGroup.Item>
                        <ListGroup.Item>PWA's</ListGroup.Item>
                        <ListGroup.Item>GraphQL</ListGroup.Item>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </div>
    )
}

export default Resume;

