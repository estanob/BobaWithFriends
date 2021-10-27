class CreateBobaEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :boba_events do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.integer :open_spots, null: false
      t.integer :location_id, null: false
      t.integer :host_id, null: false
      t.timestamps
    end
  end
end
