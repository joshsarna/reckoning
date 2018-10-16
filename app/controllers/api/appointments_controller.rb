class Api::AppointmentsController < ApplicationController
  def index
    @appointments = Appointment.all
    render 'index.json.jbuilder'
  end

  def create
    @appointment = Appointment.new(
      name: params[:name],
      description: params[:description],
      start_time: params[:start_time],
      end_time: params[:end_time],
      location: params[:location]
    )
    @appointment.save
    render 'show.json.jbuilder'
  end

  def show
    @appointment = Appointment.find(params[:id])
    render 'show.json.jbuilder'
  end

  def update
    @appointment = Appointment.find(params[:id])
    @appointment.update(
      name: params[:name] || @appointment.name,
      description: params[:description] || @appointment.description,
      start_time: params[:start_time] || @appointment.start_time,
      end_time: params[:end_time] || @appointment.end_time,
      location: params[:location] || @appointment.location
    )
    render 'show.json.jbuilder'
  end

  def destroy
    @appointment = Appointment.find(params[:id])
    @appointment.destroy
    render json: { message: 'You deleted this appointment' }
  end
end
