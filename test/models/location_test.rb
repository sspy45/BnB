# == Schema Information
#
# Table name: locations
#
#  id              :integer          not null, primary key
#  title           :string           not null
#  description     :string           not null
#  street_address1 :string           not null
#  street_address2 :string           not null
#  city            :string           not null
#  state           :string           not null
#  zip             :integer          not null
#  lat             :float
#  lng             :float
#  owner_id        :integer          not null
#  archived        :boolean          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'test_helper'

class LocationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
