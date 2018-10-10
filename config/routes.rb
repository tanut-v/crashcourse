Rails.application.routes.draw do
  root 'hello#index'

  get 'nav' => 'hello#nav'

  resources :articles, only: %w(index show)
  resources :users, only: %w(index show)

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
