# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create!(username: 'tony', password: "password")
user2 = User.create!(username: 'demo', password: "password" )
user3 = User.create!(username: Faker::Name.name, password: "password" )
user4 = User.create!(username: Faker::Name.name, password: "password" )
user5 = User.create!(username: Faker::Name.name, password: "password" )
user6 = User.create!(username: Faker::Name.name, password: "password" )
user7 = User.create!(username: Faker::Name.name, password: "password" )
user8 = User.create!(username: Faker::Name.name, password: "password" )
user9 = User.create!(username: Faker::Name.name, password: "password" )
user10 = User.create!(username: Faker::Name.name, password: "password" )
user11 = User.create!(username: Faker::Name.name, password: "password" )

location1 = Location.create!(title: "title", description: "Chateau de Tony", street_address1: "473 Stow Ave", street_address2: "Apt 2", city: "Oakland", zip: "94606", state: "CA", lng: -122.250617, lat: 37.803799, owner_id: user1.id, archived: false)
