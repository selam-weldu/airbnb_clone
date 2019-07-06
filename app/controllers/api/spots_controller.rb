class Api::SpotsController < ApplicationController
    def index
        @spots = Spot.all
        render "api/spots/index"
    end

    def show
        @spot = Spot.find(params[:id])
        render "api/spots/show"
    end


    
    private
    def spot_params
        params.require(:spot).permit(:title,photos: [])
    end
end
