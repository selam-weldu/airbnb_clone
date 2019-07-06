json.extract! @spot, :id, :title, :description,:num_guests,:num_bedrooms,
                        :num_beds,:num_baths,:listing_type, :price, :location, 
                        :loc_detail,:latitude, :longitude,:host_id, :wifi, :washer, 
                        :tv, :elevator, :parking, :kitchen
json.photo_url url_for(@spot.photos.first) 
json.photoUrls @spot.photos.map { |photo| url_for(photo) }                     


