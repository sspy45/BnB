Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users do
      resources :pets
      resources :bookings
      resources :locations
      resources :reviews, only: [:index]
    end
    resources :locations, only: [:index, :show] do
      resources :reviews, only: [:index, :create]
      resources :bookings, only: [:index, :create]
    end
    resource :session
    resources :pictures
    resources :bookings, only: [:create]
    resources :pet_types, only: [:index]
  end
  root "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
