class Shift < ApplicationRecord
  belongs_to :project

  def friendly_total_time
    (end_time - start_time) / 3600
  end
end
