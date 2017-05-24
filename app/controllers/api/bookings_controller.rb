class Api::BookingsController < ApplicationController
  def index
    if params[:type] == 'user'
      user = User.find(params[:user_id])
      @bookings = user.bookings.includes(:location)
    else params[:type] == 'location'
      @bookings = Booking.where('location_id = (?)', params[:location_id])
    end
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
