class RenameLatitudeToLat < ActiveRecord::Migration[5.2]
  def change
    rename_column :spots, :latitude, :lat
    rename_column :spots, :longitude, :lng
  end
end
