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
    @booking = Booking.new(booking_params)
    if @booking.save
      render 'api/bookings/show'
    else
      @errors = @booking.errors.full_messages
      render json: [@errors], status: 401
    end
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
