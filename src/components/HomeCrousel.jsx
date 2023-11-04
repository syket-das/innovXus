import Carousel from 'react-bootstrap/Carousel';

function HomeCrousel() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block "
          src="https://source.unsplash.com/random"
          alt="First slide"
          style={{
            width: '100%',
            height: '350px',
          }}
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          src="https://source.unsplash.com/random"
          alt="Second slide"
          style={{
            width: '100%',
            height: '350px',
          }}
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          src="https://source.unsplash.com/random"
          alt="Third slide"
          style={{
            width: '100%',
            height: '350px',
          }}
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCrousel;
