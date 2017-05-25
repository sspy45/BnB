class Api::ReviewsController < ApplicationController

  def index
    if params[:type] == "location"
      @reviews = Review.where('location_id = (?)', params[:location_id])
      render "api/reviews/index"
    end
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render "api/reviews/show"
    else
      @errors = @review.errors.full_messages
      render json: [@errors], status: 401
    end
  end

  def review_params
    params.require(:review).permit(:body, :rating, :user_id, :review_type, :location_id, :pet_id)
  end
end
