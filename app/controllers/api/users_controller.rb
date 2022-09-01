class Api::UsersController < ApplicationController

  def show
    render json: @current_user
  end

  # these options weren't in the code challenge but wanted to give as options 
  def update
      @current_user.update!(params.permit(:name, :username))
      render json: @current_user
  end
  
  # these options weren't in the code challenge but wanted to give as options 
  def destroy
    @current_user.destroy
    head :no_content
  end

  private

  def user_params
    params.permit(:name, :username, :password)
  end
end