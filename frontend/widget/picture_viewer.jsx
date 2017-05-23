import React from 'react';
import Slider from 'react-slick';

class PictureViewer extends React.Component {
  constructor(){
    super();
  }

  render(){
    const {pictures, options} = this.props;

    const settings =  options || {
      dots: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    };

    if(pictures.length > 0){
      return (
      <section>
        <Slider {...settings}>
          {pictures.map(picture => (
            <img
              key={picture.id}
              alt={picture.name || "Location"}
              src={picture.url}/>
          ))}
        </Slider>
      </section>
      );
    } else {
      return (
        <section>
          <img
            alt={"Location"}
            src={"http://res.cloudinary.com/dkw3fxfzr/image/upload/v1495563515/home_onquwb.png"}/>
        </section>
      );
    }
  }
}

export default PictureViewer;
