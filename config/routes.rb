Rails.application.routes.draw do
  root 'hello#index'
  get 'hi' => 'hello#hi'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
