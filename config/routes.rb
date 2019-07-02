Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:index, :create, :show]
    resource :session, only: [:create, :destroy, :show]
  end

  root "static_pages#root"
end