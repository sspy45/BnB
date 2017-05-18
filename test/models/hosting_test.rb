# == Schema Information
#
# Table name: hostings
#
#  id          :integer          not null, primary key
#  location_id :integer          not null
#  pet_type_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class HostingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
