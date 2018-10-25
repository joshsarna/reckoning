class Api::ProjectsController < ApplicationController
  def index
    @projects = current_user.projects
    render 'index.json.jbuilder'
  end

  def show
    @project = Project.find(params[:id])
    render 'show.json.jbuilder'
  end
end
