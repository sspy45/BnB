import React from 'react';
import PictureViewer from '../../../widget/picture_viewer';

const Carousel = (pictures) => {

  let pictureOptions={
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
    arrows: true
  };

  if(pictures.length > 0){
    return(
      <PictureViewer
        pictures={pictures}
        options={pictureOptions}
      />
    );
  } else {
      return(
        <section>
          <h1> Don't forget about me</h1>
          <img src='http://res.cloudinary.com/dkw3fxfzr/image/upload/v1495583958/default-splash_q9gejo.jpg' />
        </section>
      );
  }

};

export default Carousel;
