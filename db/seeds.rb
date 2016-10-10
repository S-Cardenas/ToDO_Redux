# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

thing1 = Todo.create!(title: "Eat", body: "Food", done: false)
thing2 = Todo.create!(title: "Sleep", body: "Alot", done: false)
thing3 = Todo.create!(title: "Drink", body: "Coke", done: false)
