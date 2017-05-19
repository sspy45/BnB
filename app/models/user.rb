# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string
#  session_token   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  first_name      :string
#  last_name       :string
#  phone           :string
#  email           :string
#

class User < ApplicationRecord

  validates :password, length: { minimum: 6, allow_nil: true }
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true

  after_initialize :ensure_session_token
  attr_reader :password

  has_many :locations,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :Location

  has_many :pets,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :Pet

  has_many :reviews,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Review

  has_many :bookings,
    through: :pets

  has_many :location,
    through: :bookings


  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return user if user && user.is_password?(password)
    nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def generate_session_token
    SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save
    self.session_token
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end


end
