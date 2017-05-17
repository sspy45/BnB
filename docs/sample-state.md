{
  current_user: {
    id: 1,
    username: "app-academy"
  },
  forms: {
    sign_up: {errors: []},
    log_in: {errors: []},
    create_location: {errors: ["body can't be blank"]}
  },
  locations: {
    1: {
      title: "Sample State",
      short_desc: "My lovely place",
      long_desc: "i love pets and that is my life"
      author_id: 1,
      beds: 3,
      house_type: "apartment",
      accommodates: 5,
      bedrooms: 4,
      cost: 500,
      duration: "week",
      approved: "false",
      house_rules: ["be nice", "be really nice", "don't be too nice"]
      }
    }
  },
  bookings: {
    1: {
      location_id: 1,
      current_bookings: ["4/13/2005-5/14/2006", '6/13/2015-6/15/2016']
    }
  }
  reviews: {
    1: {
      title: "great experience",
      author_id: 1,
      location_id: 2,
      description: "is cool",

    }
  }
}
