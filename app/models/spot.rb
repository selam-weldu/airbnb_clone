# == Schema Information
#
# Table name: spots
#
#  id           :bigint           not null, primary key
#  title        :string           not null
#  description  :text             not null
#  num_guests   :integer
#  num_bedrooms :integer
#  num_beds     :integer
#  num_baths    :integer
#  listing_type :string
#  price        :float            not null
#  location     :string           not null
#  loc_detail   :string
#  latitude     :float            not null
#  longitude    :float            not null
#  host_id      :integer          not null
#  wifi         :boolean          default(TRUE)
#  washer       :boolean          default(TRUE)
#  tv           :boolean          default(TRUE)
#  elevator     :boolean          default(TRUE)
#  parking      :boolean          default(TRUE)
#  kitchen      :boolean          default(TRUE)
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Spot < ApplicationRecord

    validates :title, :host_id, :price, :location, :longitude, :latitude, presence: true


    belongs_to :host,
        foreign_key: :host_id,
        class_name: :User 
end
    
    

#   def self.in_bounds(bounds)
#     self.where("lat < ?", bounds[:northEast][:lat])
#       .where("lat > ?", bounds[:southWest][:lat])
#       .where("lng > ?", bounds[:southWest][:lng])
#       .where("lng < ?", bounds[:northEast][:lng])
#   end

