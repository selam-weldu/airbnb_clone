class CreateSpots < ActiveRecord::Migration[5.2]
  def change
    create_table :spots do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :num_guests
      t.integer :num_bedrooms
      t.integer :num_beds
      t.integer :num_baths
      t.string :listing_type
      t.float :price, null: false
      t.string :location, null: false
      t.string :loc_detail
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.integer :host_id, null: false
      t.boolean :wifi, default: true
      t.boolean :washer, default: true
      t.boolean :tv, default: true
      t.boolean :elevator, default: true
      t.boolean :parking, default: true
      t.boolean :kitchen, default: true
      t.timestamps
    end
    add_index :spots, :host_id
  end
end
