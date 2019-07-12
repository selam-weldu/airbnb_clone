json.users do
    json.set! @user.id do
        json.extract! @user, :id, :username, :fname, :bio
        json.photoUrl url_for(@user.photo) if @user.photo.attached?
    end
end


json.bookings do
    @user.bookings.each do |booking|
        json.set! booking.id do 
            json.extract! booking, :id, :check_in, :check_out, :guest_id, :spot_id, :num_guest
        end
    end
end


json.spots do
    @user.booked_spots.each do |spot|
        json.set! spot.id do
            json.extract! spot, :id, :title, :description,:num_guests,:num_bedrooms,
                        :num_beds,:num_baths,:listing_type, :price, :location, 
                        :loc_detail,:lat, :lng,:host_id, :wifi, :washer, 
                        :tv, :elevator, :parking, :kitchen                     
            json.photoUrls spot.photos.map { |photo| url_for(photo) }
        end
    end
end

