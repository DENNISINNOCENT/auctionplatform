Rails.application.routes.draw do
  resources :commodities, only:[:index,:create,:destroy,:show]
  resources :bidders, only:[:index,:create,:update,:destroy,:show]
  # resources :users, only: [:index, :show, :create, :update, :destroy]
 post "/signup", to: "users#create"
 get "/me", to: "users#show"
 post "/login", to: "sessions#create"
 delete "/logout", to: "sessions#destroy"
end
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
