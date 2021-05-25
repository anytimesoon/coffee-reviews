class ReviewSerializer
  include JSONAPI::Serializer
  attributes :content, :author

  belongs_to :coffee
end
