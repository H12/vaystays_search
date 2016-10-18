# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

json_file = File.read(Rails.root.join("results.json"))
data_hash = JSON.parse(json_file)

data_hash["data"].each do |args|
  property = Property.create(args.except("user_id"))
end