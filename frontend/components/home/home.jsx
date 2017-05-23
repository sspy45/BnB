import React from 'react';

import Carousel from './carousel';
import Footer from '../footer';
import LocationsContainer from '../locations/locations_container';

export default class Home extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

    return(
      <section className="home-container">
        <Carousel />

          <LocationsContainer filter={"dog"}/>
          <LocationsContainer filter={"cat"}/>
          <LocationsContainer filter={"godzilla"}/>
  
        <Footer />
      </section>
    );
  }
}
