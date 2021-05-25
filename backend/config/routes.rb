Rails.application.routes.draw do
  get 'reviews/create'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :roasters, only: [:index, :show]
  resources :coffees, only: [:index, :show]
  resources :reviews, only: [:create]
end
