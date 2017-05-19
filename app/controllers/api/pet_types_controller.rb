class Api::PetTypesController < ApplicationController
  def index
    @pet_types = PetType.all
  end
end
