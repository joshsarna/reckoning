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
      end_time: Time.now,
      total_time: friendly_total_time
    )
    render 'show.json.jbuilder'
  end
end
