class Commodity < ApplicationRecord
    has_many :bidders
     has_many :comments, through: :bidders
end
