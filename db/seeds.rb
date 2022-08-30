# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# When restarting the database all the user info goes with it
Id.delete_all
Username.delete_all
Password.delete_all
Name.delete_all
User.delete_all

# creating the users
john = User.create(name: "John Smith", username: "john", Password: "1234567")
mary = User.create(name: "Mary Kim", username: "mary", Password: "1111111")
johndoe = User.create(name: "John Doe", username: "johndoe", Password: "222222")