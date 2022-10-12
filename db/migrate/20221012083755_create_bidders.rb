class CreateBidders < ActiveRecord::Migration[6.1]
  def change
    create_table :bidders do |t|
      t.string :name
      t.string :email
      t.integer :bidding_price
      t.string :commodity_id
      t.string :comment_id

      t.timestamps
    end
  end
end
