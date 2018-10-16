class Api::TasksController < ApplicationController
  def index
    @tasks = Task.all
    render 'index.json.jbuilder'
  end

  def show
    @task = Task.find(params[:id])
    render 'show.json.jbuilder'
  end

  def create
    @task = Task.new(
      name: params[:name],
      due_date: params[:due_date],
      completed_status: params[:completed_status]
    )
    @task.save
    render 'show.json.jbuilder'
  end

  def update
    @task = Task.find(params[:id])
    @task.update(
      name: params[:name] || @task.name,
      due_date: params[:due_date] || @task.due_date,
      completed_status: params[:completed_status] || @task.completed_status
    )
    render 'show.json.jbuilder'
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy
    render json: { message: "You deleted this task" }
  end
end
