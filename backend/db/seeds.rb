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

Roaster.create(name: 'Square Mile', logo: 'https://i.pinimg.com/236x/17/1f/a4/171fa4b77da19d1921d6f6aa28ac5155.jpg')
Roaster.create(name: 'Rave', logo: 'https://www.thecollaborators.com/wp-content/uploads/2020/04/01_Rave_Collabs-Web_Logo-1280x900.jpg')
Roaster.create(name: 'Hasbean', logo: 'https://cdn.shopify.com/s/files/1/0023/1572/t/10/assets/logo.png')