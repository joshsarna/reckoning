class Api::ShiftsController < ApplicationController
  def create
    @shift = Shift.new(
      start_time: Time.now,
      end_time: nil,
      project_id: params[:project_id],
      total_time: nil
    )
    @shift.save
    render 'show.json.jbuilder'
  end

  def update
    @shift = Shift.find(params[:id])
    @shift.update(
      end_time: Time.now
    )
    @shift.update(
      total_time: (@shift.end_time - @shift.start_time) / 3600
    )
    render 'show.json.jbuilder'
  end
end
