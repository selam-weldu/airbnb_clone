@spots.each do |spot|
   json.set! spot.id do
        json.extract! spot, :id, :title, :description,:num_guests,:num_bedrooms,
                            :num_beds,:num_baths,:listing_type, :price, :location, 
                            :loc_detail,:lat, :lng,:host_id, :wifi, :washer, 
                            :tv, :elevator, :parking, :kitchen
        json.hostId spot.host_id
        json.photoUrls spot.photos.map { |photo| url_for(photo) }
   end
end






# @spots.each do |spot|
#     json.set! spot.id do
#         json.extract! spot, :id, :title, :description,:num_guests,:num_bedrooms,
#                             :num_beds,:num_baths,:listing_type, :price, :location, 
#                             :loc_detail,:lat, :lng,:host_id, :wifi, :washer, 
#                             :tv, :elevator, :parking, :kitchen
#         json.hostId spot.host_id
#         json.photoUrls spot.photos.map { |photo| url_for(photo) } 
#     end                
# end
