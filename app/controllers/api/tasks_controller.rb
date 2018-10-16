class Api::TasksController < ApplicationController
  def index
    @tasks = Task.all
    render 'index.json.jbuilder'
  end

  def show
    @task = Task.find(params[:id])
    render 'show.json.jbuilder'
  end
end
