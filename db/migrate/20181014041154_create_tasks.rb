class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :name
      t.datetime :due_date
      t.boolean :completed_status

      t.timestamps
    end
  end
end
