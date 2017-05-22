class Api::LocationsController < ApplicationController

  def index
    if params[:type] == "rentals"
      pets = Pet.where('owner_id = (?)', params[:user_id].to_i)
      id = pets.map(&:id)
      @locations = Location.where('id IN (?)', id)
      render "api/locations/index"
    elsif ["dog", "cat", "snake", "chincilla", "godzilla"].include?(params[:type])
      @locations = PetType.where('species = (?)', params[:type])[0].locations
      render "api/locations/index"
    elsif params[:type] == "cat"
      @locations = PetType.where('species = (?)', params[:type])[0].locations
    else
      @locations = Location.all
      # in_bounds(params[:bounds])
    end
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

  def show
    @location = Location.find(params[:id])
    render "api/locations/show"
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
