import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'


export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const [error, setError] = useState(false)
    const [emailInvalid, setEmailInvalid] = useState(false)

    function isValidEmail(email) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setEmail(pattern.test(email));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.length || email.length || text.length === 0) {
            setError(true);
        }
        if (!isValidEmail(email)) {
            setEmailInvalid(true);
            setEmail('');
        }
        setName('');
        setEmail('');
        setText('');
    }

    const handleChange = (e) => {

    }

    return (
        <Col className='contactForm' xs={12}>
            <Form onSubmit={handleSubmit} onChange={handleChange} className='contactForm'>
                <Form.Group className="mb-3 ">
                    <Form.Label className='contactHeaders'>Name</Form.Label>
                    {error ? <Form.Control className='formText' type="text" placeholder="This field is required" onChange={(e) => { setName(e.target.value) }} />
                        : <Form.Control className=' inputField' type="text" placeholder="Name" onChange={(e) => { setName(e.target.value) }} />}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    {error ? <Form.Control type="text" placeholder="This field is required" className='error' onChange={(e) => { setEmail(e.target.value) }} /> : emailInvalid ? <Form.Control type="text" placeholder="Invalid email" className='error' onChange={(e) => { setEmail(e.target.value) }} />
                        : <Form.Control className=' inputField' type="text" placeholder="email" onChange={(e) => { setEmail(e.target.value) }} />}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Comment</Form.Label>
                    {error ? <Form.Control as='textarea' type="textarea" placeholder="This field is required" className='error' onChange={(e) => { setText(e.target.value) }} />
                        : <Form.Control className=' inputField' as='textarea' type="textarea" placeholder="Leave a comment!" onChange={(e) => { setText(e.target.value) }} />}
                </Form.Group>
                <Button className="contactBtn" type="submit">
                    Submit
                </Button>
            </Form>
        </Col>
    )
}