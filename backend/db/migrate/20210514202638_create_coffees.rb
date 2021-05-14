class CreateCoffees < ActiveRecord::Migration[5.1]
  def change
    create_table :coffees do |t|
      t.string :name
      t.string :tasting_notes
      t.integer :score
      t.string :roast_level
      t.integer :roaster_id

      t.timestamps
    end
  end
end
