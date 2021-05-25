class AddAuthorToReviews < ActiveRecord::Migration[5.1]
  def change
    add_column :reviews, :author, :string, default: "Anonymous"
  end
end
