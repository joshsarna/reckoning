Rails.application.routes.draw do
  # STEP 1: A ROUTE triggers a controller action
  # verb "/urls" => "namespace/controllers#action"

  namespace :api do
    get '/tasks' => 'tasks#index'
    post '/tasks' => 'tasks#create'
    get '/tasks/:id' => 'tasks#show'
    patch '/tasks/:id' => 'tasks#update'
    delete '/tasks/:id' => 'tasks#destroy'
  end
end
