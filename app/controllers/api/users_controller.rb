class Api::UsersController < ApplicationController

  def new
    render :new
  end

  def index
    @users = User.all
  end

  def create
    @user = User.new(user_params)
    if @user.valid?
      @user.save
      login!(@user)
      render "api/users/show"
    else
      @errors = @user.errors.full_messages
      render json: [@errors], status: 401
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      render :show
    else
      @errors = @user.errors.full_messages
      render json: [@errors], status: 422
    end
  end

  def user_params
    params.require(:user).permit(
    :username,
    :password,
    :first_name,
    :last_name,
    :phone,
    :email
)
  end

end
