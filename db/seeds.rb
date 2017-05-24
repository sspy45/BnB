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
user4 = User.create!(username: Faker::Name.name, password: "password" )
user5 = User.create!(username: Faker::Name.name, password: "password" )
user6 = User.create!(username: Faker::Name.name, password: "password" )
user7 = User.create!(username: Faker::Name.name, password: "password" )
user9 = User.create!(username: Faker::Name.name, password: "password" )
user10 = User.create!(username: Faker::Name.name, password: "password" )
user11 = User.create!(username: Faker::Name.name, password: "password" )
user12 = User.create!(username: Faker::Name.name, password: "password" )

location1 = Location.create!(title: "My Casa", description: "Chateau de Tony", street_address1: "473 Stow Ave", street_address2: "Apt 2", city: "Oakland", zip: "94606", state: "CA", lng: -122.250617, lat: 37.803799, owner_id: user1.id, archived: false)
location2 = Location.create!(title: "App-Academy", description: "Where dreams are made", street_address1: "160 Spear St", street_address2: "Floor 14", city: "San Fransico", zip: "94105", state: "CA", lng: -122.3959239, lat: 37.791305, owner_id: user1.id, archived: false)
location3 = Location.create!(title: "Mana's place", description: "Mana's place", street_address1: "473 Stow Ave", street_address2: "Apt 2", city: "Oakland", zip: "94606", state: "CA", lng: -122.250617, lat: 37.803799, owner_id: user3.id, archived: false)
location4 = Location.create!(title: "New Gold Medal", description: "Resturant that also pet sits", street_address1: "389 8th St", street_address2: "", city: "Oakland", zip: "94607", state: "CA", lng: -122.2744451, lat: 37.7993183, owner_id: user2.id, archived: false)
location5 = Location.create!(title: "Lake Merrit", description: "Feel free to just leave your pet at the park for a few days", street_address1: "1418 Lakeside Dr", street_address2: "", city: "Oakland", zip: "94612", state: "CA", lng: -122.2643697, lat: 37.8014345, owner_id: user2.id, archived: false)
location6 = Location.create!(title: "Norfolk Place", description: "Nice loft area for small and large dogs", street_address1: "55 Norfolk st", street_address2: "APT 201", city: "San Fransico", zip: "94301", state: "CA", lng: -122.4135940, lat: 37.7710050, owner_id: user2.id, archived: false)
location7 = Location.create!(title: "Pet paradise", description: "This place was made for pets, they'll love it here", street_address1: "135 Holladay Ave", street_address2: "", city: "San Fransico", zip: "94301", state: "CA", lng: -122.4070137, lat: 37.747681, owner_id: user7.id, archived: false)
location8 = Location.create!(title: "Great space for pets", description: "Recently remodeled and a perfect place for any pet, even snakes", street_address1: "444 Kansas St", street_address2: "", city: "San Fransico", zip: 94197, state: "CA", lng: -122.4048278, lat: 37.7642289, owner_id: user3.id, archived: false)
location9 = Location.create!(title: "Jackson Playground", description: "I live in this park and would love some company", street_address1: "17th St", street_address2: "", city: "San Fransico", zip: "94107", state: "CA", lng: -122.4009353, lat: 37.7640998, owner_id: user12.id, archived: false)

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

booking1 = Booking.create!(pet_id: pet1.id, location_id: location1.id, check_in: DateTime.new(2009,9,1,17), check_out: DateTime.new(2009,9,1,17))
booking2 = Booking.create!(pet_id: pet4.id, location_id: location1.id, check_in: DateTime.new(2009,9,1,17), check_out: DateTime.new(2009,9,1,17))

review1 = Review.create!(user_id: user1.id, review_type: "pet", body: "Loki was a pleasure to take care of and we had a great time watching breaking bad", rating: 5, pet_id: pet1.id)
review2 = Review.create!(user_id: user1.id, review_type: "location", body: "I think my place is not bad. I'd live there!", rating: 5, location_id: location1.id)
review3 = Review.create!(user_id: user1.id, review_type: "location", body: "I like that this place feeds my pup chicken", rating: 5, location_id: location4.id)
review4 = Review.create!(user_id: user1.id, review_type: "location", body: "this is a safe place, don't judge me", rating: 5, location_id: location5.id)

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


pic1 = Picture.create!(name: "Tony's house", url: "http://res.cloudinary.com/dkw3fxfzr/image/upload/v1495558234/nice-house_da7ecb.jpg", imageable_id: location1.id, imageable_type: "Location" )
pic2 = Picture.create!(name: "Tony's kitchen", url: "http://res.cloudinary.com/dkw3fxfzr/image/upload/v1495606668/kitchen_jwijnf.jpg", imageable_id: location1.id, imageable_type: "Location" )
pic3 = Picture.create!(name: "App-Academy", url: "http://res.cloudinary.com/dkw3fxfzr/image/upload/v1495608112/170504214709-app-academy-1024x576_y9onas.jpg", imageable_id: location2.id, imageable_type: "Location" )
