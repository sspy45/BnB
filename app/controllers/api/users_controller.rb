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
      render "api/shared/user"
    else
      @errors = @user.errors.full_messages
      render @errors, status: 422
    end
  end


  def user_params
    params.require(:user).permit(:username, :password)
  end

end
