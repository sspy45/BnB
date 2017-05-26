#Air Bark n Bite

Air Bark n Bite is a fullstack web application inspired by AirBnb.  It uses Ruby on Rails on the backend, PostgresSQL and React.js and Redux framework on the frontend.

Air Bark n Bite can be found [here](https://secure-beach-84827.herokuapp.com/#/)

#Features & Implementation

The site was created to compliment AirBnb.  When people travel abroad for either a short or an extended stay **Air Bark n Bite** is there for you to book a place for your beloved pets.  

Unlike a majority of sites that are mainly about their users, Air Bark n Bite is centered around the pets.  Bookings for a rentals will be made in relationship to the pet.  

Users will be able to search local hostings through the Google Map Api.  Once the user has found suitable location, they will be able to select their favorite pet and available dates through AirBnb's own calendar widget.  The calendar will filter out the unavailable dates on the backend and only allow users to select from open dates.  Once a stay has been completed the user will now be able to leave feedback in the form of a review for that host.  

![Calendar_and_Map](http://res.cloudinary.com/dkw3fxfzr/image/upload/v1495835094/Screen_Shot_2017-05-26_at_2.42.59_PM_kva5wy.png)

Some of the challenges integrating Google Maps involved populating available locations based on the map focus and dimensions.

Another challenging implementation was handling responses from AirBnb's calendar app, particularly updating the availability of the hosting instantaneously and preventing anyone else from making the same booking.  

#Upcoming implementation
Air Bark n Bite will continue to be centered for pets.  This means upcoming features will be added in describing the pet interactions. Photo uploads will be made available for pets.  Photos can be loaded by either the owners or the hosts provided consent has been obtained.  Comments will also be added for pets.  No one wants an angry godzilla storming up the place.

If you have any feedback, would like to contribute or would like to see anything implemented on Air Bark n Bite, please email me at sspy45@gmail.com.    
