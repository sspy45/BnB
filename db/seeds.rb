Location.create!([
  {title: "My Casa", description: "Chateau de Tony", street_address1: "473 Stow Ave", street_address2: "Apt 2", city: "Oakland", state: "CA", zip: 94606, lat: 37.803799, lng: -122.250617, owner_id: 1, archived: false},
  {title: "App-Academy", description: "Where dreams are made", street_address1: "160 Spear St", street_address2: "Floor 14", city: "San Fransico", state: "CA", zip: 94105, lat: 37.791305, lng: -122.3959239, owner_id: 1, archived: false},
  {title: "Mana's place", description: "Mana's place", street_address1: "473 Stow Ave", street_address2: "Apt 2", city: "Oakland", state: "CA", zip: 94606, lat: 37.803799, lng: -122.250617, owner_id: 3, archived: false},
  {title: "New Gold Medal", description: "Resturant that also pet sits", street_address1: "389 8th St", street_address2: "", city: "Oakland", state: "CA", zip: 94607, lat: 37.7993183, lng: -122.2744451, owner_id: 2, archived: false},
  {title: "Lake Merrit", description: "Feel free to just leave your pet at the park for a few days", street_address1: "1418 Lakeside Dr", street_address2: "", city: "Oakland", state: "CA", zip: 94612, lat: 37.8014345, lng: -122.2643697, owner_id: 2, archived: false}
  ])
Booking.create!([
  {location_id: 1, check_in: "2009-09-01 17:00:00", check_out: "2009-09-01 17:00:00", pet_id: 1},
  {location_id: 1, check_in: "2009-09-01 17:00:00", check_out: "2009-09-01 17:00:00", pet_id: 4}
])
Hosting.create!([
  {location_id: 1, pet_type_id: 1},
  {location_id: 1, pet_type_id: 2},
  {location_id: 1, pet_type_id: 3},
  {location_id: 1, pet_type_id: 4},
  {location_id: 1, pet_type_id: 5},
  {location_id: 2, pet_type_id: 1},
  {location_id: 2, pet_type_id: 2},
  {location_id: 2, pet_type_id: 3},
  {location_id: 2, pet_type_id: 4},
  {location_id: 2, pet_type_id: 5},
  {location_id: 3, pet_type_id: 1},
  {location_id: 3, pet_type_id: 2},
  {location_id: 3, pet_type_id: 3},
  {location_id: 4, pet_type_id: 4},
  {location_id: 4, pet_type_id: 5},
  {location_id: 5, pet_type_id: 1},
  {location_id: 5, pet_type_id: 3},
  {location_id: 5, pet_type_id: 5}
])
Pet.create!([
  {owner_id: 1, type_id: 1, name: "Loki", desc: "Brother or Thor my other dog"},
  {owner_id: 1, type_id: 2, name: "Kkani", desc: "Fat, lazy cute cat"},
  {owner_id: 1, type_id: 2, name: "Kas", desc: "Slightly fatter cat"},
  {owner_id: 1, type_id: 5, name: "GODZILLA!", desc: "Likes the beach, dislikes spicy food"},
  {owner_id: 3, type_id: 2, name: "Lily", desc: "Mixed colored cat that loves to purr"}
])
PetType.create!([
  {species: "dog"},
  {species: "cat"},
  {species: "snake"},
  {species: "chinchilla"},
  {species: "godzilla"}
])
Picture.create!([
  {name: nil, url: "https://scontent.fsnc1-2.fna.fbcdn.net/v/t31.0-1/c532.376.180.180/s160x160/12829228_10104244666531073_6641204040303598417_o.jpg?oh=47245ae2dabbf214b0aa7af3e6d081d8&oe=59B1F26F", imageable_type: "User", imageable_id: 1},
  {name: nil, url: "http://res.cloudinary.com/dkw3fxfzr/image/upload/v1495520452/xs1hbdr0nzyasv2lkhdg.jpg", imageable_type: "User", imageable_id: 1},
  {name: nil, url: "http://res.cloudinary.com/dkw3fxfzr/image/upload/v1495520535/ertobznfqck80peeug04.jpg", imageable_type: "User", imageable_id: 1},
  {name: nil, url: "http://res.cloudinary.com/dkw3fxfzr/image/upload/v1495520564/piburpti3onqzonht1lo.jpg", imageable_type: "User", imageable_id: 1},
  {name: nil, url: "http://res.cloudinary.com/dkw3fxfzr/image/upload/v1495520776/m8s2msczn6a8eougcrli.jpg", imageable_type: "User", imageable_id: 1},
  {name: nil, url: "http://res.cloudinary.com/dkw3fxfzr/image/upload/v1495520955/li3edzszuxmhmwsdhw5d.jpg", imageable_type: "User", imageable_id: 1},
  {name: nil, url: "http://res.cloudinary.com/dkw3fxfzr/image/upload/v1495521122/i2hgc4zhsqtu8pg080ew.jpg", imageable_type: "User", imageable_id: 1}
])
Review.create!([
  {body: "Loki was a pleasure to take care of and we had a great time watching breaking bad", rating: 5, user_id: 1, pet_id: 1, location_id: nil, review_type: "pet"},
  {body: "I think my place is not bad. I'd live there!", rating: 5, user_id: 1, pet_id: nil, location_id: 1, review_type: "location"},
  {body: "I like that this place feeds my pup chicken", rating: 5, user_id: 1, pet_id: nil, location_id: 4, review_type: "location"},
  {body: "this is a safe place, don't judge me", rating: 5, user_id: 1, pet_id: nil, location_id: 5, review_type: "location"}
])
User.create!([
  {username: "demo", password_digest: "$2a$10$YegUEEmYD6oxMjU7XhZCiu1lMgRSrVZypWoD57rLBupt/suF5fkAO", session_token: "l6mWU_Xsw9Zqp4VifowBxg", first_name: nil, last_name: nil, phone: nil, email: nil},
  {username: "mana", password_digest: "$2a$10$FRE8ep/27pjx71hy1vRKkugMZ9.Cam6.sGkne7f4aU1/2TQmCPGk6", session_token: "CyZk0KC0gJ2ASXmlUa1XXw", first_name: nil, last_name: nil, phone: nil, email: nil},
  {username: "Sharon Wehner", password_digest: "$2a$10$my2RIL2iMjoHPzJq9PyU6.ZVJKsU9KKaZ4E.R54MJ/OUaFd14s1l6", session_token: "4MPIHZBSL9bIs1Anux21Lg", first_name: nil, last_name: nil, phone: nil, email: nil},
  {username: "tony", password_digest: "$2a$10$kZnsFfFEo79qRyaKfj61ZOAbPUB9.XcejQ5MM395z4edDGsziqhE6", session_token: "UcGQDYipR4Dt76zbPGpcpg", first_name: nil, last_name: nil, phone: nil, email: nil}
])
