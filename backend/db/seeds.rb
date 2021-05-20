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

Roaster.create(name: 'Square Mile', logo: 'http://uploads.escapethecity.org/organisation/avatar/10144/thumb_300x300_b738e90e-0ba6-493e-af1f-cf58d842813c.jpg')
Roaster.create(name: 'Rave', logo: 'https://www.thecollaborators.com/wp-content/uploads/2020/04/01_Rave_Collabs-Web_Logo-1280x900.jpg')
Roaster.create(name: 'Hasbean', logo: 'http://imglogo.podbean.com/image-logo/749498/hblogo.jpg')