class AddLogoToRoaster < ActiveRecord::Migration[5.1]
  def change
    add_column :roasters, :logo, :string
  end
end
