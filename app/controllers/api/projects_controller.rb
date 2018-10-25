class Api::ProjectsController < ApplicationController
  def index
    @projects = current_user.projects
    render 'index.json.jbuilder'
  end

  def create
    @project = Project.new(
      client_name: params[:client_name],
      rate: params[:rate],
      user_id: current_user.id
    )
    @project.save
    render 'show.json.jbuilder'
  end

  def show
    @project = Project.find(params[:id])
    render 'show.json.jbuilder'
  end

  def update
    @project = Project.find(params[:id])
    @project.update(
      client_name: params[:client_name] || @project.client_name,
      rate: params[:rate] || @project.rate
    )
    render 'show.json.jbuilder'
  end
end
