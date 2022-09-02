class ApplicationController < ActionController::API

  # adding cookies to the application
    include ActionController::Cookies
  
    # raises an exception if the record does not exist or if it was input wrong
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :not_processed
  
    # authorize the information before showing information
    before_action :authorize
  
    private
  
    # check if the current user is logged in
    def current_user
      @current_user ||= User.find_by(id: session[:user_id])
    end
  
    # send unauthorized error unless current user
    def authorize
      render json: { errors: ["not authorize"]}, status: :unauthorized unless current_user
    end
  
    # raise error if the info is not found
    def not_found(exception)
      render json: { errors: ["#{exception.model} not found"]}, status: :not_found
    end
  
    # raises error if the info is not valid/unprocessable
    def not_processed(invalid)
      render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end