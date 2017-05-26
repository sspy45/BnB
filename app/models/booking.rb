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

class Booking < ApplicationRecord
  validates :pet_id, :location_id, :check_in, :check_out, presence: true
  validate :does_not_overlap

  belongs_to :pet,
    primary_key: :id,
    foreign_key: :pet_id,
    class_name: :Pet

  belongs_to :location,
    primary_key: :id,
    foreign_key: :location_id,
    class_name: :Location

  has_one :owner,
    through: :pet

  alias_attribute :customer, :owner

  def overlaps
    Booking.where("check_in < (?) AND check_out > (?)", self.check_out, self.check_in)
  end

  def does_not_overlap

    unless self.overlaps.empty?
      errors[:base] <<
        "Request conflicts with existing bookings"
    end
  end

end
