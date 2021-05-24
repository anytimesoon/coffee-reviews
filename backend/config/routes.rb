Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :roasters, only: [:index, :show]
  resources :coffees, only: [:index, :show]
end
