@bookings.each do |booking|
  json.set! booking.id do
    json.dates (booking.check_in..booking.checkout)
  end
end
