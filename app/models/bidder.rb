class Bidder < ApplicationRecord
    belongs_to :commodity
    belongs_to :comment
end
