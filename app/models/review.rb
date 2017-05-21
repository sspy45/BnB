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

class Review < ApplicationRecord
  validates :body, :rating, :user_id, :review_type, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :location
  belongs_to :pet
end
