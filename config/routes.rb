Rails.application.routes.draw do
  
  get "semantic/home"

  devise_for :users
  
  root to: 'pages#show'

end
