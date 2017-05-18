class Change < ActiveRecord::Migration[5.0]
  def change
    change_column :pet_types, :species, :string, null: false
  end
end
