class Api::PicturesController < ApplicationController

  def create
    @picture = Picture.new(picture_params)
    if @picture.save
      render "api/pictures/show"
    else
      @errors = @picture.errors.full_messages
      render json: [@errors], status: 401
    end
  end

  def picture_params
    params.require(:picture).permit(:name, :url, :imageable_type, :imageable_id)
  end
end
