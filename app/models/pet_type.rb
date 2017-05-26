# == Schema Information
#
# Table name: pet_types
#
#  id         :integer          not null, primary key
#  species    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class PetType < ApplicationRecord
  include PgSearch
  multisearchable :against => [:species]
  validates :species, presence: true

  has_many :pets,
    primary_key: :id,
    foreign_key: :type_id,
    class_name: :Pet

  has_many :hostings,
    primary_key: :id,
    foreign_key: :pet_type_id,
    class_name: :Hosting

  has_many :locations,
    through: :hostings
end
