Rails.application.routes.draw do
  
  
  devise_for :users
  resources :pages do
  	get 'home', on: :collection
  end
  root to: 'pages#show'

end
