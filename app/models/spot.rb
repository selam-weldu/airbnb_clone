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
#  lat          :float            not null
#  lng          :float            not null
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

    validates :title, :host_id, :price, :location, :lat, :lng, presence: true


    has_many_attached :photos

    belongs_to :host,
        foreign_key: :host_id,
        class_name: :User 


    def self.in_bounds(bounds)
    bounds = JSON.parse(bounds)

    self.where('lat < ?', bounds["northEast"]["lat"].to_f)
      .where('lat >?', bounds["southWest"]["lat"].to_f)
      .where('lng < ?', bounds["northEast"]["lng"].to_f)
      .where('lng > ?', bounds["southWest"]["lng"].to_f)
  end
end
    
    


