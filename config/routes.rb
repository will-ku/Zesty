Rails.application.routes.draw do
  root to: "static_pages#root"
  
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :products, only: [:index, :show] 
    resources :reviews, only: [:index, :create, :update, :destroy]
    
  end
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

