class Api::UsersController < ApplicationController

  # allowing the user to be shown when logged in
  def show
    render json: @current_user
  end

  # these options weren't in the code challenge but wanted to give as an option to edit a user
  def update
      @current_user.update!(params.permit(:name, :username))
      render json: @current_user
  end
  
  # these options weren't in the code challenge but wanted to give as an option to delete a user
  def destroy
    @current_user.destroy
    head :no_content
  end

  private

  # giving permission for the attributes to be used
  def user_params
    params.permit(:name, :username, :password)
  end
end