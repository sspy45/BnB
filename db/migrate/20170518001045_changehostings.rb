class Changehostings < ActiveRecord::Migration[5.0]
  def change
    change_column :hostings, :location_id, :integer, null: false
    change_column :hostings, :pet_type_id, :integer, null: false
  end
end
