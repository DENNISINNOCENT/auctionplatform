class Commodity < ApplicationRecord
    CATEGORIES = ['Electrical','vehicles','Furniture','Beauty Products','Computers']
    validates :name,presence: true
    validates :category,presence:true
    validates :image_url,presence:true
    validates :email_of_auctioneir,presence:true,uniqueness: true
    validates :bid_price,presence:true

    validates :category,inclusion: {in: CATEGORIES}
    
    
    
end
