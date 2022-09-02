class UserSerializer < ActiveModel::Serializer
  # allowing the username to be shown on the homepage
  attributes :name
end
