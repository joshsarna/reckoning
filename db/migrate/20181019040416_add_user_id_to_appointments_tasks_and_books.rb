class AddUserIdToAppointmentsTasksAndBooks < ActiveRecord::Migration[5.2]
  def change
    add_column :appointments, :user_id, :integer
    add_column :tasks, :user_id, :integer
    add_column :books, :user_id, :integer
  end
end
