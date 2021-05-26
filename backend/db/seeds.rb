# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Roaster.all.each do |roaster|
	roaster.destroy
end

sm = Roaster.create(name: 'Square Mile', logo: 'https://i.pinimg.com/236x/17/1f/a4/171fa4b77da19d1921d6f6aa28ac5155.jpg')
rave = Roaster.create(name: 'Rave', logo: 'https://www.thecollaborators.com/wp-content/uploads/2020/04/01_Rave_Collabs-Web_Logo-1280x900.jpg')
hbean = Roaster.create(name: 'Hasbean', logo: 'https://cdn.shopify.com/s/files/1/0023/1572/t/10/assets/logo.png')


Coffee.all.each do |coffee|
	coffee.destroy
end

Coffee.create(name: "Colombian", tasting_notes: "apple, red berries, caramel", roast_level: "light", roaster_id: sm.id)
Coffee.create(name: "Ethiopian", tasting_notes: "orange, white grape, pineapple", roast_level: "light", roaster_id: sm.id)
Coffee.create(name: "Guatemalan", tasting_notes: "chocolate, vanilla, hazelnut", roast_level: "light", roaster_id: rave.id)
Coffee.create(name: "Kenyan", tasting_notes: "passionfruit, pineapple, mango", roast_level: "light", roaster_id: rave.id)
Coffee.create(name: "Brazilian", tasting_notes: "watermelon, strawberry, prune", roast_level: "medium light", roaster_id: rave.id)
Coffee.create(name: "Chinese", tasting_notes: "caramel, honey, cocoa nibs", roast_level: "medium", roaster_id: hbean.id)
Coffee.create(name: "Peruvian", tasting_notes: "pekan, brown sugar, milk chocolate", roast_level: "medium dark", roaster_id: hbean.id)
Coffee.create(name: "Colombian", tasting_notes: "lemon, apple, plum", roast_level: "light", roaster_id: hbean.id)
Coffee.create(name: "Ethiopian", tasting_notes: "peach, banana, honeydew", roast_level: "light", roaster_id: hbean.id)