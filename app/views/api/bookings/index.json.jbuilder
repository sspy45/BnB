json.array!(@bookings) do |booking|
  json.pet_id booking.pet_id
  json.location_id booking.location_id
  json.check_in booking.check_in
  json.check_out booking.check_out
end
