class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.text :body, null: false
      t.integer :rating, null: false
      t.integer :user_id, null: false
      t.integer :pet_id
      t.integer :location_id
      t.string :review_type, null: false
      t.timestamps
    end
  end
end
