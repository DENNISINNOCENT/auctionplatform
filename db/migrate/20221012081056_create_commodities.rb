class CreateCommodities < ActiveRecord::Migration[6.1]
  def change
    create_table :commodities do |t|
      t.string :name
      t.string :category
      t.integer :bid_price
      t.string :image_url
      t.string :description
      t.string :email_of_auctioneir

      t.timestamps
    end
  end
end
