class CreateCommands < ActiveRecord::Migration
  def change
    create_table :commands do |t|
      t.string :command
      t.integer :time
      t.integer :user_id

      t.timestamps
    end
  end
end
