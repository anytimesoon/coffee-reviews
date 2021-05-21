class RoasterSerializer
  include JSONAPI::Serializer
  attributes :name, :logo
  has_many :coffees
end
