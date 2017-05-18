class Api::BookingsController < ApplicationController
  def index
    pets = Pet.where(owner_id: params[:user_id]).map do |pet|
      pet.id
    end
    @bookings = Booking.where('pet_id IN (?)', pets)
  end

  def new
  end

  def create
  end

  def show
  end

  def destroy
  end

  def booking_params
    params.require(:booking).permit(
      :location_id,
      :pet_id,
      :check_in,
      :check_out
    )
  end
end
