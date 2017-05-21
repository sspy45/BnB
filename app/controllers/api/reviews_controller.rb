class Api::ReviewsController < ApplicationController

  def index
    if params[:type] == "location"
      @reviews = Review.where('location_id = (?)', params[:location_id])
      render "api/reviews/index"
    end
  end
end
