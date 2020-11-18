import React, { useState } from 'react';
import './App.css';
import Values from 'values.js'
import SingleColor from './SingleColor'
import { Form, Button, Col } from 'react-bootstrap';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#810000').all(5));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(5)
      setList(colors)
      setError(false)
    } catch (error) {
      setError(true)
    }
  }
  return (
    <>
      <section className="container main-section">
        <Form onSubmit={handleSubmit}>
          <Form.Row className="forminput">
            <Col xs="auto">
              <h3>Color Generator</h3>
            </Col>
            <Col xs="auto">
              <Form.Control
                className="mb-2"
                type="text"
                placeholder="#810000"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                // eslint-disable-next-line react/jsx-no-duplicate-props
                className={`${error? 'Eror': null}`}
              />
            </Col>
            <Col xs="auto">
              <Button type="submit" className="mb-2" variant="outline-info">
                Submit
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </section>
      <section className="container colors">
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} hexCol={color.hex}/>
        })}
      </section>
    </>
  );
}

export default App;
