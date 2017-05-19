class Api::PetsController < ApplicationController

  def index
    @pets = Pet.where(owner_id: params[:user_id])
  end

  def new
  end

  def create
    @pet = Pet.new(pets_params)
    if @pet.save
      render "api/pets/show"
    else
      @errors = @pet.errors.full_messages
      render json: [@errors], status: 401
    end
  end

  def show
  end

  def destroy
  end

  def pets_params
    params.require(:pet).permit(
      :owner_id,
      :type_id,
      :name,
      :desc
    )
  end

end
