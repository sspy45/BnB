class CreateBookings < ActiveRecord::Migration[5.0]
  def change
    create_table :bookings do |t|
      t.integer :user_id, null: false
      t.integer :location_id, null: false
      t.datetime :check_in, null: false
      t.datetime :check_out, null: false

      t.timestamps
    end
  end
end
