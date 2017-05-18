class CreateHostings < ActiveRecord::Migration[5.0]
  def change
    create_table :hostings do |t|
      t.integer :location_id
      t.integer :pet_type_id
      t.timestamps
    end
  end
end
