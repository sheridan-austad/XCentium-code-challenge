class UsersController < ApplicationController
    # skip_before_action :authorize, only: [:create]

    # GET: /users
  get "/users" do
    User.all.to_json
  end

     # POST: /users
  post "/users" do
    user = User.create(
      username: params[:username],
      email: params[:email]
    )
    user.to_json
  end

   # GET: /users/name
   get "/users/by_name/:name" do
    find_user_by_name
    if @user
      @user.to_json(include: [todos: {include: [:user]}])

    else
      {errors: "Record not found with name #{params['name']}"}.to_json
    end
  end
end