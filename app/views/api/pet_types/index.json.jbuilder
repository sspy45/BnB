json.array!(@pet_types) do |type|
  json.id type.id
  json.species type.species
end
