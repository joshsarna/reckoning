class CreateShifts < ActiveRecord::Migration[5.2]
  def change
    create_table :shifts do |t|
      t.datetime :start_time
      t.datetime :end_time
      t.integer :user_id
      t.integer :project_id
      t.decimal :total_time

      t.timestamps
    end
  end
end
