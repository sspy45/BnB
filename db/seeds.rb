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
user8 = User.create!(username: Faker::Name.name, password: "password" )
user9 = User.create!(username: Faker::Name.name, password: "password" )
user10 = User.create!(username: Faker::Name.name, password: "password" )
user11 = User.create!(username: Faker::Name.name, password: "password" )

location1 = Location.create!(title: "My Casa", description: "Chateau de Tony", street_address1: "473 Stow Ave", street_address2: "Apt 2", city: "Oakland", zip: "94606", state: "CA", lng: -122.250617, lat: 37.803799, owner_id: user1.id, archived: false)
location2 = Location.create!(title: "App-Academy", description: "Chateau de Tony", street_address1: "473 Stow Ave", street_address2: "Apt 2", city: "Oakland", zip: "94606", state: "CA", lng: -122.3959239, lat: 37.791305, owner_id: user1.id, archived: false)
location3 = Location.create!(title: "Mana's place", description: "Mana's place", street_address1: "473 Stow Ave", street_address2: "Apt 2", city: "Oakland", zip: "94606", state: "CA", lng: -122.250617, lat: 37.803799, owner_id: user3.id, archived: false)
location4 = Location.create!(title: "New Gold Medal", description: "Resturant that also pet sits", street_address1: "389 8th St", street_address2: "", city: "Oakland", zip: "94607", state: "CA", lng: -122.2744451, lat: 37.7993183, owner_id: user2.id, archived: false)
location5 = Location.create!(title: "Lake Merrit", description: "Feel free to just leave your pet at the park for a few days", street_address1: "1418 Lakeside Dr", street_address2: "", city: "Oakland", zip: "94612", state: "CA", lng: -122.2643697, lat: 37.8014345, owner_id: user2.id, archived: false)

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
