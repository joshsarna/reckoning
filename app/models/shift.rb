class Shift < ApplicationRecord
  belongs_to :project

  def friendly_start_time
    time_zone_correction = 25200
    (start_time - time_zone_correction).strftime('%I:%M %p')
  end

  def friendly_end_time
    time_zone_correction = 25200
    (end_time - time_zone_correction).strftime('%I:%M %p')
  end

  def friendly_total_time
    (end_time - start_time) / 3600
  end
end
