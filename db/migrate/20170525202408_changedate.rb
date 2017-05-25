class Changedate < ActiveRecord::Migration[5.0]
  def change
    change_column :bookings, :check_out, :date
    change_column :bookings, :check_in, :date
  end
end
