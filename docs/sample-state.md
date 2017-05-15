{
  currentUser: {
    id: 1,
    username: "app-academy"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createPost: {errors: ["body can't be blank"]}
  },
  Posts: {
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
      approve: "false",
      house_rules: ["be nice", "be really nice", "don't be too nice"]
      }
    }
  },
  Renter: {
    1: {
      check_in: "5/13/2020",
      check_out: "5/14/2040",
      guests: 5,
    }
  }
  comments: {
    1: {
      title: "great experience",
      author_id: 1,
      post_id: 2,
      description: "is cool",

    }
  }
  tagFilters: [1, 7, 14] // Used to track selected Tags for filtering of notes
}
