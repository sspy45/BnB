# == Schema Information
#
# Table name: reviews
#
#  id          :integer          not null, primary key
#  body        :text             not null
#  rating      :integer          not null
#  user_id     :integer          not null
#  pet_id      :integer
#  location_id :integer
#  review_type :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
