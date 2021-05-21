class CoffeeSerializer
  include JSONAPI::Serializer
  attributes :name, :tasting_notes, :score, :roast_level, :roaster_id

  belongs_to :roaster
end
