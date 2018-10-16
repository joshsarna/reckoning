class Api::AppointmentsController < ApplicationController
  def index
    @appointments = Appointment.all
    render 'index.json.jbuilder'
  end

  def show
    @appointment = Appointment.find(params[:id])
    render 'show.json.jbuilder'
  end
end
