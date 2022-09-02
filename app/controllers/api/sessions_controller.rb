class Api::SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create]
  
    # creating a new session when a user logs in
    def create
      user = User.find_by(username: params[:username])
      # if the user credentials match log them in, else return an error
      if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render json: user, status: :created
      else
        render json: { errors: ["Invalid username or password"] }, status: :unauthorized
      end
    end
  
    # when the user logs out delete that session
    def destroy
      session.delete :user_id
      head :no_content
    end
  
  end