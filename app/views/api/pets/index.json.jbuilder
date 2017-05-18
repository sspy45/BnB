json.array!(@pets) do |pet|
  json.name pet.name
  json.desc pet.desc
end
