puts "🌱 Seeding..." 

# creating the users
john = User.create(name: "John Smith", username: "john", password: "1234567")
mary = User.create(name: "Mary Kim", username: "mary", password: "1111111")
johndoe = User.create(name: "John Doe", username: "johndoe", password: "222222")

puts "Done seeding!"
