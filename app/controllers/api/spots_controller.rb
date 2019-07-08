
class Api::SpotsController < ApplicationController
  def index
    @spots = bounds ? Spot.in_bounds(bounds).with_attached_photos : Spot.all.with_attached_photos
    
    if @spots
      render :index  
    else
      render json: ["No Spots"], status: 422
    end
  end

  def show
    @spot = Spot.with_attached_photos.find(params[:id])

    if @spot
      render :show
    else
      render json: ["No Spot"], status: 422
    end
  end
  
  private

  def spot_params
    params.require(:listing).permit(:title, :description, :num_guests, :listing_type, :num_beds, :num_baths, :price,:location, :loc_detail, :lat, :lng, :host_id, photos: [])
  end

  def bounds
    params[:bounds]
  end

end