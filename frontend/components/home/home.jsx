import React from 'react';

import Carousel from './carousel';
import LocationsContainer from '../locations/locations_container';

export default class Home extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

    return(
      <section className="home-container">
        <Carousel />
          <section className="categories">
            <h2>Locations for Dogs</h2>
            <LocationsContainer filter={"dog"}/>
          </section>
          <section>
            <h2>Locations for Cats</h2>
            <LocationsContainer filter={"cat"}/>
          </section>
          <section>
            <h2>Locations for Godzilla</h2>
            <LocationsContainer filter={"godzilla"}/>
          </section>

      </section>
    );
  }
}
