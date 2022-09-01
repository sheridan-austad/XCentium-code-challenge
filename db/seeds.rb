puts "Seeding..."

puts "Creating users..."
john = User.create(name: "John Smith", username: "john", password: "1234567")
mary = User.create(name: "Mary Kim", username: "Mary", password: "1111111")
johndoe = User.create(name: "John Doe", username: "johndoe", password: "222222")

puts "Done seeding!"