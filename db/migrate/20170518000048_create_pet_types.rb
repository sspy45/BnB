class CreatePetTypes < ActiveRecord::Migration[5.0]
  def change
    create_table :pet_types do |t|
      t.string :species
      t.timestamps
    end
  end
end
