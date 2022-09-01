Rails.application.routes.draw do
  namespace :api do
    
    resources :users, only: [:index, :show]
    get "/me", to: "users#show"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"

  end
end