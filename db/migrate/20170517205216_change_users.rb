class ChangeUsers < ActiveRecord::Migration[5.0]
  def change
    add_index :users, :username, unique: true
    change_column :users, :username, :string, null: false
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :phone, :string
    add_column :users, :email, :string
  end
end
