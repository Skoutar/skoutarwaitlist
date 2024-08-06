import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const images = [
    'images/Carousel3.png',
    'images/Carousel1.png',
    'images/Carousel4.png',
    'images/Carousel3.png',
    'images/Carousel4.png',
    'images/Carousel3.png',
    'images/Carousel1.png',
    'images/Carousel6.png',
  ];
  
  const items = images.map((image, index) => (
    <div className="item" data-value={index} key={index}>
      <img src={image} alt={`Slide ${index}`} className="carousel-image" />
    </div>
  ));

const Carousel = () => {
    return (
        <AliceCarousel
        autoPlay
        autoPlayInterval={10000} // 10 seconds
        infinite
        disableButtonsControls
        disableDotsControls
        items={items}
    />
    )
}

export default Carousel