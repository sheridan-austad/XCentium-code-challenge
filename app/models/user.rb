class User < ApplicationRecord
    # gives the user a secure password needed to login
    has_secure_password

    # validating name, username, and password credentials for a new user
    validates :name, presence: true, uniqueness: true
    validates :username, presence: true, length: {in: 3..25}
    validates :password, length: {in: 5..25}
    
end