class Project < ApplicationRecord
  belongs_to :user
  has_many :shifts

  def friendly_shifts
    shifts.map{ | shift | {id: shift.id, start: shift.friendly_start_time, end: shift.friendly_end_time, total_time: shift.total_time || 0 }
    }
  end
end