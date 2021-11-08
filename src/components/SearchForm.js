import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SearchForm = ({ setQuery }) => {
  const [userInput, setUserInput] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!userInput) return alert('Please type something before searching');
    setQuery(userInput);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className='g-2'>
        <Col md>
          <Form.Group className='mb-3' controlId='userInput'>
            <Form.Control
              type='text'
              placeholder='Search for anything tech...'
              value={userInput}
              onChange={e => setUserInput(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col md>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchForm;
