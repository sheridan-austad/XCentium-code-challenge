class ApplicationController < ActionController::Base

    # include cookies to allow the user to stay logged in
    include ActionController::Cookies

    # allow the application to warn the user if the input is not in the database
    rescue_from ActiveRecord::RecordInvalid, with: :not_processed

    rescue_from ActiveRecord::RecordNotFound, with: :not_found
  
    # the user must be logged in to see their information
    before_action :authorize
    
    private
    
    # check if the current user is logged in, if they are shows their info
    def current_user
      @current_user ||= User.find(session[:user_id])
    end

    # if not the current user they get an error
    def authorize
      render json: { errors: ["Not authorized"] }, status: :unauthorized unless current_user
    end 
  
    # if a user tries to login and they do not have an account it will say user does not exist
    def not_found(exception)
      render json: { errors: ["#{exception.model} not found"]}, status: :not_found
     end
  
    # if the information exists but was not input correctly onto the website gives invalid error
    def not_processed(invalid)
      render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end