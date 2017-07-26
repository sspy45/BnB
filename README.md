# Air Bark n Bite

Air Bark n Bite is a fullstack web application inspired by AirBnb.  Its tech stack features:

  Ruby on Rails
  PostgresSQL
  React.js
  Redux.js

Air Bark n Bite can be found [here](http://www.airbarkandbite.com/#/)

## Features & Implementation

The site was created to compliment AirBnb.  When you travel abroad for either a short or an extended stay **Air Bark n Bite** is here for you to book a place for your beloved pets.  

Unlike a majority of sites that are mainly about their users, Air Bark n Bite is centered around the pets.  Bookings for a rentals will be made in relationship to the pet.  

Users will be able to search local hosts through the Google Map Api.  Once the user has found suitable location, they will be able to select their favorite pet and available dates through AirBnb's own calendar widget.  The calendar will filter out the unavailable dates on the backend and only allow users to select from open dates.  Once a stay has been completed the user will now be able to leave feedback in the form of a review for that host.  

![Calendar_and_Map](http://res.cloudinary.com/dkw3fxfzr/image/upload/v1495835094/Screen_Shot_2017-05-26_at_2.42.59_PM_kva5wy.png)

## Challenges

Some of the challenges involved integrating Google Maps available locations based on the map focus and dimensions. Every time a new location was selected, other proxies would need to be updated.
```
componentDidUpdate() {
  if (this.props.singleLocation) {
    const targetLocationKey = Object.keys(this.props.locations)[0];
    const targetLocation = this.props.locations[targetLocationKey];
    this.MarkerManager.updateMarkers([targetLocation]);
  } else {
    this.MarkerManager.updateMarkers(this.props.locations);
  }
}

registerListeners() {
  google.maps.event.addListener(this.map, 'idle', () => {
    const { north, south, east, west } = this.map.getBounds().toJSON();
    const bounds = {
      northEast: { lat: north, lng: east },
      southWest: { lat: south, lng: west }
    };
    this.props.updateFilter('bounds', bounds);
  });
}
```

Another challenging implementation was handling responses from AirBnb's calendar library, particularly updating the availability of the hosting instantaneously and preventing anyone else from making the same booking.  

In Ruby:
```
def overlaps
  Booking.where("id = (?)", self.id)
  .where("check_in < (?) AND check_out > (?)", self.check_out, self.check_in)
end
```
In Javascript:
```
isDayBlocked(date){
  const { bookings } = this.props;
  return date.format("LL") in bookings;
}
```
# Upcoming implementation
Air Bark n Bite will continue to be centered for pets.  This means upcoming features will be added in describing the pet interactions. Photo uploads will be made available for pets.  Photos can be loaded by either the owners or the hosts provided consent has been obtained.  Comments will also be added for pets.  No one wants an angry godzilla storming up the place.

If you have any feedback, would like to contribute or would like to see anything implemented on Air Bark n Bite, please email me at sspy45@gmail.com.    
