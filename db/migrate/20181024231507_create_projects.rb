class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :client_name
      t.decimal :rate

      t.timestamps
    end
  end
end
