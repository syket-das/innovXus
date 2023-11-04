import React from 'react';
import { Button, Card } from 'react-bootstrap';
const TeamMember = ({
  image,
  name,
  designation,
  description,
  instagram,
  github,
  linkedin,
}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src={image}
        style={{
          height: '250px',
          objectFit: 'fill',
        }}
      />
      <Card.Body>
        <Card.Title>
          {name} ({designation})
        </Card.Title>
        <Card.Text>{description}</Card.Text>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '10px',
          }}
        >
          <a href={github} target="_blank" rel="noopener noreferrer">
            <img src={'/icons/github.svg'} alt="" srcset="" />
          </a>
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            <img src={'/icons/instagram.svg'} alt="" srcset="" />
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <img src={'/icons/linkedin.svg'} alt="" srcset="" />
          </a>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TeamMember;
