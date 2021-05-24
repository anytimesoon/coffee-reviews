class ReviewSerializer
  include JSONAPI::Serializer
  attributes :content

  belongs_to :coffee
end
