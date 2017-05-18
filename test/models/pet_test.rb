# == Schema Information
#
# Table name: pets
#
#  id         :integer          not null, primary key
#  owner_id   :integer          not null
#  type_id    :integer          not null
#  name       :string           not null
#  desc       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class PetTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
