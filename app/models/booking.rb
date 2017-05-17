# == Schema Information
#
# Table name: bookings
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  location_id :integer          not null
#  check_in    :datetime         not null
#  check_out   :datetime         not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Booking < ApplicationRecord
end
