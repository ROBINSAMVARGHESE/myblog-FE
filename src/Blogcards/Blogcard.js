import React from 'react';
import Card from 'react-bootstrap/Card';

function Blogcard(data) {
  return (
    <>
      <Card>
        {/* Replace this src with a valid image URL */}
        <Card.Img variant="top" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}

export default Blogcard;
