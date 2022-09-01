class User < ApplicationRecord
    has_secure_password

    validates :name, presence: true, uniqueness: true
    validates :username, presence: true, length: {in: 3..25}
    validates :password, length: {in: 5..25}
    
end