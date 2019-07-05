# require 'byebug'
class Api::UsersController < ApplicationController

  def index
    @users = User.all
    render "api/users/index"
  end
  
   def show
    # debugger
    @user = User.with_attached_photo.find(params[:id])
    render "api/users/show"
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :fname, :bio, :photoUrl)
  end
end

