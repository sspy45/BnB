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


  def update
    @pet = Pet.find(params[:id])
    if @pet.update_attributes(pets_params)
      render :show
    else
      @errors = @pet.errors.full_messages
      render @errors, status: 422
    end
  end


  def destroy
    @pet = Pet.find(params[:id])

    if @pet.destroy
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
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
