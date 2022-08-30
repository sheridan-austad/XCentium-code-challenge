puts "🌱 Seeding..." 

Id.delete_all
Username.delete_all
Password.delete_all
Name.delete_all
User.delete_all

# creating the users
john = User.create(name: "John Smith", username: "john", Password: "1234567")
mary = User.create(name: "Mary Kim", username: "mary", Password: "1111111")
johndoe = User.create(name: "John Doe", username: "johndoe", Password: "222222")

puts "Done seeding!"
