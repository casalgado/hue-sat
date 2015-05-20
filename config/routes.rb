Rails.application.routes.draw do
  
  
  devise_for :users
  
  resources :pages do
  	get 'home', on: :collection
  	get 'portfolio', on: :collection
  	get 'blog', on: :collection
  	get 'about', on: :collection
  end

  root to: 'pages#show'

end
