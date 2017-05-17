class Api::LocationsController < ApplicationController

  def index
    @locations = Location..in_bounds(params[:bounds])
  end

  def create
    @location = Location.new(location_params)
    if @location.save
      render "api/locations"
    else
      @errors = @location.errors.full_messages
      render @errors, statas: 422
    end
  end

  def location_params
    params(:location).permit(
      :title,
      :description,
      :street_address1,
      :street_address2,
      :city,
      :state,
      :zip,
      :owner_id,
      :lat,
      :lng,
      :archived
    )
  end
end
