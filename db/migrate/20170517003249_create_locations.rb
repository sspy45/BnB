class CreateLocations < ActiveRecord::Migration[5.0]
  def change
    create_table :locations do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.string :street_address1, null: false
      t.string :street_address2, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.integer :zip, null: false
      t.float :lat
      t.float :lng
      t.integer :owner_id, null: false
      t.index :owner_id
      t.boolean :archived, null: false
      t.timestamps
    end
  end
end
