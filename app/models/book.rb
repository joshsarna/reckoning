class Book < ApplicationRecord
  belongs_to :user

  def friendly_due_date
    if due_date
      due_date.strftime("%b %d, %Y")
    else
      due_date
    end
  end
end
