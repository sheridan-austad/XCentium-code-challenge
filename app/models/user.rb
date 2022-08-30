class User < ActiveRecord::Base
    has_secure_password
    validates :username, presence: true, uniqueness: true, length: {in: 3..10}
    validates :password, length: {in: 5..15}
end