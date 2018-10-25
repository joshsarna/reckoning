class FixDecimalPrecisionOfRateAndTotalTime < ActiveRecord::Migration[5.2]
  def change
    change_column :projects, :rate, :decimal, precision: 5, scale: 2
    change_column :shifts, :total_time, :decimal, precision: 4, scale: 2

    add_column :projects, :user_id, :integer
    remove_column :shifts, :user_id, :integer
  end
end
