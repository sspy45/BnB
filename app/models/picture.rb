class Picture < ApplicationRecord
  belongs_to :imageable, polymorphic: true
  validates :url, :imageable_id, :imageable_type, presence: true
end
