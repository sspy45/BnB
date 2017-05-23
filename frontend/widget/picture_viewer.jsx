import React from 'react';
import Slider from 'react-slick';

class PictureViewer extends React.Component {
  constructor(){
    super();
  }

  render(){
    const {pictures, options} = this.props;

    const settings = {
      dots: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    };
    return (
      <section className='location-carousel'>
        <Slider {...settings}>
          {pictures.map(picture => (
            <img
              key={picture.id}
              alt={picture.name || ""}
              src={picture.url || ""}/>
          ))}

        </Slider>
      </section>


    );
  }
}

export default PictureViewer;
