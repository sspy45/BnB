# == Schema Information
#
# Table name: bookings
#
#  id          :integer          not null, primary key
#  location_id :integer          not null
#  check_in    :datetime         not null
#  check_out   :datetime         not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  pet_id      :integer          not null
#

require 'test_helper'

class BookingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
