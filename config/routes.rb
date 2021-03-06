Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'

  namespace :api, defalts: {format: :json} do
    resources :users, only: [:show, :create, :index]
    resource :session, only: [:create, :destroy]
  end
end
