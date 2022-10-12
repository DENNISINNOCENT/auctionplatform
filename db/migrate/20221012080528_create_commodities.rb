class CreateCommodities < ActiveRecord::Migration[6.1]
  def change
    create_table :commodities do |t|
      t.string :name
      t.string :category
      t.interger :bid_price
      t.string :image_url
      t.string :description

      t.timestamps
    end
  end
end
