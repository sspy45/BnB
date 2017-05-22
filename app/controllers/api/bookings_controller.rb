class Api::BookingsController < ApplicationController
  def index
    user = User.find(params[:user_id])
    @bookings = user.bookings.includes(:location)
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
