class Appointment < ApplicationRecord
  belongs_to :user
  def friendly_time
    "#{start_time.strftime('%I:%M %p')} to #{end_time.strftime('%I:%M %p')}"
  end
end
