Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create,:index,:show]
    resource :session, only: [:create, :destroy]
    resources :spots, only: [:index, :show ]
    resources :bookings, only: [:index, :show, :create, :destroy ]
  end

  root "static_pages#root"
end



