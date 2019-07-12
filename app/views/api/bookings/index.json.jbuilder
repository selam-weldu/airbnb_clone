@bookings.each do |booking|
    json.set! booking.id do
        json.extract! @booking, :id, :check_in, :check_out, :guest_id, :spot_id, :num_guest
    end
end


# @bookings.each do |booking|
#    json.set! booking.id do
#         json.extract! booking, :id, :check_in, :check_out, :guest_id, :spot_id, :num_guests
#    end
# end