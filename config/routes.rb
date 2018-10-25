Rails.application.routes.draw do
  # STEP 1: A ROUTE triggers a controller action
  # verb "/urls" => "namespace/controllers#action"

  namespace :api do
    get '/tasks' => 'tasks#index'
    post '/tasks' => 'tasks#create'
    get '/tasks/completed' => 'tasks#completed' #not RESTful
    get '/tasks/:id' => 'tasks#show'
    patch '/tasks/:id' => 'tasks#update'
    delete '/tasks/:id' => 'tasks#destroy'

    get '/books' => 'books#index'
    post '/books' => 'books#create'
    get '/books/:id' => 'books#show'
    patch '/books/:id' => 'books#update'
    delete '/books/:id' => 'books#destroy'

    get '/appointments' => 'appointments#index'
    get '/appointments/day/:day' => 'appointments#day' #not RESTful
    post '/appointments' => 'appointments#create'
    get '/appointments/:id' => 'appointments#show'
    patch '/appointments/:id' => 'appointments#update'
    delete '/appointments/:id' => 'appointments#destroy'

    get '/projects' => 'projects#index'
    get '/projects/:id' => 'projects#show'

    post '/shifts' => 'shifts#create'
    patch '/shifts/:id' => 'shifts#update'

    get '/log' => 'users#log'
    post '/users' => 'users#create'
    post '/sessions' => 'sessions#create'
  end
end
