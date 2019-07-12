class Api::BookingsController < ApplicationController

    def show
        @booking = Booking.find(params[:id])
        render :show
    end

    def index
        @bookings = Booking.all
        render :index
    end

    def create
        @booking = Booking.new(booking_params)
        @booking.guest_id = current_user.id 

        if @booking.save
            render 'api/bookings/show'
        else
            render json: @booking.errors.full_messages, status: 422
        end

    end

    def destroy
        @booking = Booking.find(params[:id])
        @booking.destroy

        render json: @booking
    end

   

    private
    def booking_params
        params.require(:booking).permit(:guest_id,:spot_id,:check_in,:check_out,:num_guest)
    end
    
end