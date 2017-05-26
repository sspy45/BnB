# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create!(username: 'tony', password: "password")
user2 = User.create!(username: 'demo', password: "password" )
user3 = User.create!(username: 'mana', password: "password" )
user4 = User.create!(username: 'FinntheHuman', password: "password" )
user5 = User.create!(username: Faker::Name.name, password: "password" )
user6 = User.create!(username: Faker::Name.name, password: "password" )
user7 = User.create!(username: Faker::Name.name, password: "password" )
user9 = User.create!(username: Faker::Name.name, password: "password" )
user10 = User.create!(username: Faker::Name.name, password: "password" )
user11 = User.create!(username: Faker::Name.name, password: "password" )
user12 = User.create!(username: Faker::Name.name, password: "password" )
user13 = User.create!(username: Faker::Name.name, password: "password" )
user14 = User.create!(username: Faker::Name.name, password: "password" )
user15 = User.create!(username: Faker::Name.name, password: "password" )
user16 = User.create!(username: Faker::Name.name, password: "password" )
user17 = User.create!(username: Faker::Name.name, password: "password" )
user18 = User.create!(username: Faker::Name.name, password: "password" )
user19 = User.create!(username: Faker::Name.name, password: "password" )
user20 = User.create!(username: Faker::Name.name, password: "password" )

location1 = Location.create!(title: "My Casa", description: "Chateau de Tony", street_address1: "473 Stow Ave", street_address2: "Apt 2", city: "Oakland", zip: "94606", state: "CA", lng: -122.250617, lat: 37.803799, owner_id: user1.id, archived: false)
location2 = Location.create!(title: "App-Academy", description: "Where dreams are made", street_address1: "160 Spear St", street_address2: "Floor 14", city: "San Fransico", zip: "94105", state: "CA", lng: -122.3959239, lat: 37.791305, owner_id: user1.id, archived: false)
location3 = Location.create!(title: "Mana's place", description: "Mana's place", street_address1: "123 Fake St", street_address2: "Apt 2", city: "Oakland", zip: "94606", state: "CA", lng: -122.2968172, lat: 37.8331627, owner_id: user3.id, archived: false)
location4 = Location.create!(title: "New Gold Medal", description: "Resturant that also pet sits", street_address1: "389 8th St", street_address2: "", city: "Oakland", zip: "94607", state: "CA", lng: -122.2744451, lat: 37.7993183, owner_id: user2.id, archived: false)
location5 = Location.create!(title: "Lake Merritt", description: "Feel free to just leave your pet at the park for a few days", street_address1: "1418 Lakeside Dr", street_address2: "", city: "Oakland", zip: "94612", state: "CA", lng: -122.2643697, lat: 37.8014345, owner_id: user2.id, archived: false)
location6 = Location.create!(title: "Norfolk Place", description: "Nice loft area for small and large dogs", street_address1: "55 Norfolk st", street_address2: "APT 201", city: "San Fransico", zip: "94301", state: "CA", lng: -122.4135940, lat: 37.7710050, owner_id: user2.id, archived: false)
location7 = Location.create!(title: "Pet paradise", description: "This place was made for pets, they'll love it here", street_address1: "135 Holladay Ave", street_address2: "", city: "San Fransico", zip: "94301", state: "CA", lng: -122.4070137, lat: 37.747681, owner_id: user7.id, archived: false)
location8 = Location.create!(title: "Great space for pets", description: "Recently remodeled and a perfect place for any pet, even snakes", street_address1: "444 Kansas St", street_address2: "", city: "San Fransico", zip: 94197, state: "CA", lng: -122.4048278, lat: 37.7642289, owner_id: user3.id, archived: false)
location9 = Location.create!(title: "Jackson Playground", description: "I live in this park and would love some company", street_address1: "17th St", street_address2: "", city: "San Fransico", zip: "94107", state: "CA", lng: -122.4009353, lat: 37.7640998, owner_id: user12.id, archived: false)
location10 = Location.create!(title: "The tree of awesomeness", description: "This is a sacred place where Jake and I do a lot of awesome stuff", street_address1: "200 Awesome Blvd", street_address2: "", city: "San Fransico", zip: "99999", state: "CA", lng: -122.461148, lat: 37.770361, owner_id: user4.id, archived: false)
location11 = Location.create!(lng: -122.4188619, lat: 37.7614082, owner_id: rand(1..20), title: "This is a fine home for any pet", description: "I've raise many pets at this location over the years and all pets love me.", street_address1: Faker::Address.street_address, street_address2: "", city: "San Fransico", zip: Faker::Address.zip, state: "CA", archived: false)
location12 = Location.create!(lat: 37.7614082, lng: -122.4188619, owner_id: rand(1..20), title: "Prefers cats, but also snakes", description: "Only cats and snakes, or both cats and snakes", street_address1: Faker::Address.street_address, street_address2: Faker::Address.secondary_address, city: "San Fransico", zip: Faker::Address.zip, state: "CA", archived: false)
location13 = Location.create!(lat: 37.773864, lng: -122.4356035, owner_id: rand(1..20), title: "Chinchilla landia", description: "This place was build for chincillas to scury around and do their chincilla things", street_address1: Faker::Address.street_address, street_address2: Faker::Address.secondary_address, city: "San Fransico", zip: Faker::Address.zip, state: "CA", archived: false)
location14 = Location.create!(lat: 37.7568045, lng: -122.4515316, owner_id: rand(1..20), title: "Anything but godzilla", description: "I watch Godzilla once and never again", street_address1: Faker::Address.street_address, street_address2: "", city: "San Fransico", zip: Faker::Address.zip, state: "CA", archived: false)
location15 = Location.create!(lat: 37.7632568, lng: -122.4209393, owner_id: rand(1..20), title: "Dogs and Cats welcome", description: "We love cats and dogs", street_address1: Faker::Address.street_address, street_address2: Faker::Address.secondary_address, city: "San Fransico", zip: Faker::Address.zip, state: "CA", archived: false)
location16 = Location.create!(lat: 37.7851077, lng: -122.4201189, owner_id: rand(1..20), title: "Snakeland", description: "We have 10000 snakes, your snake will be at home here.  It's almost like that India Jones scene here.", street_address1: Faker::Address.street_address, street_address2: Faker::Address.secondary_address, city: "San Fransico", zip: Faker::Address.zip, state: "CA", archived: false)

pet_type1 = PetType.create!(species: "dog")
pet_type2 = PetType.create!(species: "cat")
pet_type3 = PetType.create!(species: "snake")
pet_type4 = PetType.create!(species: "chinchilla")
pet_type5 = PetType.create!(species: "godzilla")

pet1 = Pet.create!(owner_id: user1.id, type_id: pet_type1.id, name: "Loki", desc: "Brother or Thor my other dog")
pet2 = Pet.create!(owner_id: user1.id, type_id: pet_type2.id, name: "Kkani", desc: "Fat, lazy cute cat")
pet3 = Pet.create!(owner_id: user1.id, type_id: pet_type2.id, name: "Kas", desc: "Slightly fatter cat")
pet4 = Pet.create!(owner_id: user1.id, type_id: pet_type5.id, name: "GODZILLA!", desc: "Likes the beach, dislikes spicy food")
pet5 = Pet.create!(owner_id: user3.id, type_id: pet_type2.id, name: "Lily", desc: "Mixed colored cat that loves to purr")
pet6 = Pet.create!(owner_id: user4.id, type_id: pet_type1.id, name: "Jack the Dog", desc: "He's like my best friend")

booking1 = Booking.create!(pet_id: pet1.id, location_id: location1.id, check_in: Date.new(2009,9,1), check_out: Date.new(2009,9,2))
booking2 = Booking.create!(pet_id: pet4.id, location_id: location1.id, check_in: Date.new(2009,9,3), check_out: Date.new(2009,9,4))

review1 = Review.create!(user_id: user1.id, review_type: "pet", body: "Loki was a pleasure to take care of and we had a great time watching breaking bad", rating: 5, pet_id: pet1.id)
review2 = Review.create!(user_id: user1.id, review_type: "location", body: "I think my place is not bad. I'd live there!", rating: 5, location_id: location1.id)
review3 = Review.create!(user_id: user1.id, review_type: "location", body: "I like that this place feeds my pup chicken", rating: 5, location_id: location4.id)
review4 = Review.create!(user_id: user1.id, review_type: "location", body: "this is a safe place, don't judge me", rating: 5, location_id: location5.id)
review5 = Review.create!(user_id: user4.id, review_type: "pet", body: "Jake and I bestest buds", rating: 5, pet_id: pet6.id)

hostings1 = Hosting.create!(location_id: location1.id, pet_type_id: pet_type1.id)
hostings2 = Hosting.create!(location_id: location1.id, pet_type_id: pet_type2.id)
hostings3 = Hosting.create!(location_id: location1.id, pet_type_id: pet_type3.id)
hostings4 = Hosting.create!(location_id: location1.id, pet_type_id: pet_type4.id)
hostings5 = Hosting.create!(location_id: location1.id, pet_type_id: pet_type5.id)
hostings6 = Hosting.create!(location_id: location2.id, pet_type_id: pet_type1.id)
hostings7 = Hosting.create!(location_id: location2.id, pet_type_id: pet_type2.id)
hostings8 = Hosting.create!(location_id: location2.id, pet_type_id: pet_type3.id)
hostings9 = Hosting.create!(location_id: location2.id, pet_type_id: pet_type4.id)
hostings10 = Hosting.create!(location_id: location2.id, pet_type_id: pet_type5.id)
hostings11 = Hosting.create!(location_id: location3.id, pet_type_id: pet_type1.id)
hostings12 = Hosting.create!(location_id: location3.id, pet_type_id: pet_type2.id)
hostings13 = Hosting.create!(location_id: location3.id, pet_type_id: pet_type3.id)
hostings14 = Hosting.create!(location_id: location4.id, pet_type_id: pet_type4.id)
hostings15 = Hosting.create!(location_id: location4.id, pet_type_id: pet_type5.id)
hostings16 = Hosting.create!(location_id: location5.id, pet_type_id: pet_type1.id)
hostings17 = Hosting.create!(location_id: location5.id, pet_type_id: pet_type3.id)
hostings18 = Hosting.create!(location_id: location5.id, pet_type_id: pet_type5.id)
hostings19 = Hosting.create!(location_id: location9.id, pet_type_id: pet_type1.id)
hostings20 = Hosting.create!(location_id: location10.id, pet_type_id: pet_type1.id)
hostings21 = Hosting.create!(location_id: location10.id, pet_type_id: pet_type2.id)
hostings22 = Hosting.create!(location_id: location10.id, pet_type_id: pet_type3.id)
hostings23 = Hosting.create!(location_id: location10.id, pet_type_id: pet_type4.id)
hostings24 = Hosting.create!(location_id: location10.id, pet_type_id: pet_type5.id)
hostings25 = Hosting.create!(location_id: rand(1..16), pet_type_id: rand(1..5))
hostings26 = Hosting.create!(location_id: rand(1..16), pet_type_id: rand(1..5))
hostings27 = Hosting.create!(location_id: rand(1..16), pet_type_id: rand(1..5))
hostings28 = Hosting.create!(location_id: rand(1..16), pet_type_id: rand(1..5))
hostings29 = Hosting.create!(location_id: rand(1..16), pet_type_id: rand(1..5))
hostings30 = Hosting.create!(location_id: rand(1..16), pet_type_id: rand(1..5))
hostings31 = Hosting.create!(location_id: rand(1..16), pet_type_id: rand(1..5))
hostings32 = Hosting.create!(location_id: rand(1..16), pet_type_id: rand(1..5))
hostings33 = Hosting.create!(location_id: rand(1..16), pet_type_id: rand(1..5))
hostings34 = Hosting.create!(location_id: rand(1..16), pet_type_id: rand(1..5))
hostings35 = Hosting.create!(location_id: rand(1..16), pet_type_id: rand(1..5))
hostings36 = Hosting.create!(location_id: rand(1..16), pet_type_id: rand(1..5))
hostings37 = Hosting.create!(location_id: rand(1..16), pet_type_id: rand(1..5))
hostings38 = Hosting.create!(location_id: rand(1..16), pet_type_id: rand(1..5))
hostings39 = Hosting.create!(location_id: rand(1..16), pet_type_id: rand(1..5))
hostings40 = Hosting.create!(location_id: rand(1..16), pet_type_id: rand(1..5))
hostings41 = Hosting.create!(location_id: rand(1..16), pet_type_id: rand(1..5))
hostings42 = Hosting.create!(location_id: rand(1..16), pet_type_id: rand(1..5))
hostings43 = Hosting.create!(location_id: rand(1..16), pet_type_id: rand(1..5))


pic1 = Picture.create!(name: "Tony's house", url: "https://res.cloudinary.com/dkw3fxfzr/image/upload/v1495558234/nice-house_da7ecb.jpg", imageable_id: location1.id, imageable_type: "Location" )
pic2 = Picture.create!(name: "Tony's kitchen", url: "https://res.cloudinary.com/dkw3fxfzr/image/upload/v1495606668/kitchen_jwijnf.jpg", imageable_id: location1.id, imageable_type: "Location" )
pic3 = Picture.create!(name: "App-Academy", url: "https://res.cloudinary.com/dkw3fxfzr/image/upload/v1495608112/170504214709-app-academy-1024x576_y9onas.jpg", imageable_id: location2.id, imageable_type: "Location" )
pic4 = Picture.create!(name: "Tree Top Fortress", url: "https://res.cloudinary.com/dkw3fxfzr/image/upload/v1495612892/TreeHouseINT_ssgk7f.png", imageable_id: location10.id, imageable_type: "Location" )
pic5 = Picture.create!(name: "Ice Kingdom", url: "https://res.cloudinary.com/dkw3fxfzr/image/upload/v1495612889/OldXSX3_fimo4s.jpg", imageable_id: location10.id, imageable_type: "Location" )
pic6 = Picture.create!(name: "Beach", url: "https://res.cloudinary.com/dkw3fxfzr/image/upload/v1495704443/beach-beverage-caribbean-cocktail-68672_pj6gxm.jpg", imageable_id: location3.id, imageable_type: "Location" )
pic7 = Picture.create!(name: "Beach", url: "https://res.cloudinary.com/dkw3fxfzr/image/upload/v1495704441/pexels-photo-29724_txon8c.jpg", imageable_id: location3.id, imageable_type: "Location" )
pic8 = Picture.create!(name: "NGM", imageable_id: location4.id, imageable_type: "Location", url: "https://res.cloudinary.com/dkw3fxfzr/image/upload/v1495704643/o_ygxptq.jpg" )
pic9 = Picture.create!(name: "Lake", imageable_id: location5.id, imageable_type: "Location", url: "https://res.cloudinary.com/dkw3fxfzr/image/upload/v1495704749/OaklandnightskylineandLakeMerritt_tmlhsh.jpg" )
pic10 = Picture.create!(name: "Lake", imageable_id: location5.id, imageable_type: "Location", url: "https://res.cloudinary.com/dkw3fxfzr/image/upload/v1495704754/Lake_Merritt_by_Aimee-Marie_Patten_peplvc.jpg" )
pic11 = Picture.create!(name: "Field", imageable_id: location7.id, imageable_type: "Location", url: "https://res.cloudinary.com/dkw3fxfzr/image/upload/v1495704843/trees-grass-lawn-park_c0zpx8.jpg" )
pic12 = Picture.create!(name: "Field", imageable_id: location7.id, imageable_type: "Location", url: "https://res.cloudinary.com/dkw3fxfzr/image/upload/v1495704846/Lantzscher_Park_Du%CC%88sseldorf_2006_wepkcx.jpg" )
pic13 = Picture.create!(name: "Scoobies House", imageable_id: location8.id, imageable_type: "Location", url: "https://res.cloudinary.com/dkw3fxfzr/image/upload/v1495704903/3008666361_c43879470f_b_xoamr1.jpg" )
pic14 = Picture.create!(name: "Playground", imageable_id: location9.id, imageable_type: "Location", url: "https://res.cloudinary.com/dkw3fxfzr/image/upload/v1495720960/8501175681_f883512ee2_b_aqjtgh.jpg" )
pic15 = Picture.create!(name: "Norfolk", imageable_id: location6.id, imageable_type: "Location", url: "https://res.cloudinary.com/dkw3fxfzr/image/upload/v1495721846/ddasdf_by5xkk.jpg" )
pic16 = Picture.create!(name: "chinchillas", imageable_id: location13.id, imageable_type: "Location", url: "https://res.cloudinary.com/dkw3fxfzr/image/upload/v1495721971/800px-2_Degu_Friends_Eating_rbiups.jpg" )
pic17 = Picture.create!(name: "godzilla", imageable_id: location14.id, imageable_type: "Location", url: "https://res.cloudinary.com/dkw3fxfzr/image/upload/v1495722095/GODZILLA_The_Game_-_Reveal_Trailer_-_Godzilla_B_W_1_qqndhg.png")
# pic18 = Picture.create!(name: "", imageable_id: location .id, imageable_type: "Location", url: "")
