import Carousel from 'react-bootstrap/Carousel';

function CarouselFade() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://site.innvictus.com/jordan/2023/iv-jordan-tatu-desktop.jpg"
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://site.innvictus.com/ux/homepage/slider/iv-slider-refresh-puma-d-1512x600-1.jpg"
          alt="Second slide"
        />


      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://site.innvictus.com/ux/homepage/slider/486928861-slider-iv-by-her-desktop.jpg"
          alt="Third slide"
        />


      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;