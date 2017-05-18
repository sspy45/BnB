class CreatePets < ActiveRecord::Migration[5.0]
  def change
    create_table :pets do |t|
      t.integer :owner_id, null: false
      t.integer :type_id, null: false
      t.string :name, null: false
      t.string :desc

      t.timestamps
    end
  end
end
