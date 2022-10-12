class CommoditySerializer < ActiveModel::Serializer
  attributes :name,:category,:bid_price,:image_url,:description
  has_many :bidders
end
