class Api::BookingsController < ApplicationController
    def index
        @bookings = current_user.bookings
        render "api/bookings/show"
    end

    def show
        @booking = Booking.find(params[:id])
        render "api/bookings/show"
    end

    def create
        @booking = Booking.new(booking_params)
        @booking.guest_id = current_user.id
        # spot = Spot.find(params[:booking][:spot_id])

        if @booking.save
            # @bookings = current_user.bookings 
            # render :index
            render "api/bookings/show"
        else
            render json: @booking.errors.full_messages, status: 422
        end
    end


    def update
        # @booking = Booking.find_by(id: params[:id])
        # if @booking.update_attributes(booking_params)
        # render "api/bookings/show"
        # else
        # render json: @booking.errors.full_messages, status: 422
        # end
    end


    def destroy
        @booking = Booking.find(params[:id])
        @booking.destroy

        render "api/bookings/show"
    end

    private
    def booking_params
        params.require(:booking).permit(:guest_id,:spot_id,:check_in,:check_out,:num_guest)
    end
end
