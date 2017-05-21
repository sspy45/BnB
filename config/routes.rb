Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users do
      resources :pets
      resources :bookings
      resources :locations
      resources :reviews, only: [:index]
    end
    resources :locations, only: [:index]
    resource :session
    resources :pet_types, only: [:index]
  end
  root "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
