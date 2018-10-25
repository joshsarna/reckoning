class Shift < ApplicationRecord
  belongs_to :project

  def friendly_start_time
    time_zone_correction = 25200
    (start_time - time_zone_correction).strftime('%I:%M %p')
  end

  def friendly_end_time
    time_zone_correction = 25200
    if !end_time
      return end_time
    else
      return (end_time - time_zone_correction).strftime('%I:%M %p')
    end
  end

  def friendly_total_time
    if !end_time
      return nil
    else
      return (end_time - start_time) / 3600
    end
  end
end
