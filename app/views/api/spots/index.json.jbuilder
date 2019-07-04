@spots.each do |spot|
    json.extract! spot, :id, :title, :type, :description, :type, 
                     :host_id, :price, :num_rooms, :num_bedrooms,
                     :num_beds, :num_guests, :wifi, :washer, :dryer,
                     :elevator, :parking, :kitchen, :location, :loc_detail,
                     :longitude, :latitude
end
