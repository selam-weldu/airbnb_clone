json.extract! @spot, :id, :title, :description,:num_guests,:num_bedrooms,
                        :num_beds,:num_baths,:listing_type, :price, :location, 
                        :loc_detail,:lat, :lng,:host_id, :wifi, :washer, 
                        :tv, :elevator, :parking, :kitchen
json.hostId @spot.host_id
json.spotType @spot.listing_type                        
json.photoUrls @spot.photos.map { |photo| url_for(photo) }                     




json.users do
    json.set! @spot.host.id do
        json.extract! @spot.host, :id, :username, :fname, :bio
        json.photoUrl url_for(@spot.host.photo) if @spot.host.photo.attached?
    end
end