json.array!(@pets) do |pet|
  json.name pet.name
  json.desc pet.desc
  json.owner_id pet.owner_id
  json.type_id pet.type_id
end
