class ChangeBooking < ActiveRecord::Migration[5.0]
  def change
    remove_column :bookings, :user_id
    add_column :bookings, :pet_id, :integer, null: false
  end
end
