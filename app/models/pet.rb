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

class Pet < ApplicationRecord
  validates :owner_id, :type_id, :name, presence: true

  belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :User

  belongs_to :pet_type,
    primary_key: :id,
    foreign_key: :type_id,
    class_name: :PetType

  has_many :bookings,
    primary_key: :id,
    foreign_key: :pet_id,
    class_name: :Booking

  has_many :locations,
    through: :bookings

end
