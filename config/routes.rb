Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/posts', to:'posts#index', as: :posts
  get '/posts/new', to: 'posts#new'
  post '/posts', to:'posts#create'
  delete '/posts/:id', to: 'posts#destroy'
  get '/posts/:id/edit', to:'posts#edit'
  put '/posts/:id', to: 'posts#update'
  patch '/posts/:id', to: 'posts#update'

end
