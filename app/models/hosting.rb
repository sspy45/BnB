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

class Hosting < ApplicationRecord

  validates :location_id, :pet_type_id, presence: true

  belongs_to :pet_type,
    primary_key: :id,
    foreign_key: :pet_type_id,
    class_name: :PetType

  belongs_to :location,
    primary_key: :id,
    foreign_key: :location_id,
    class_name: :Location
end
