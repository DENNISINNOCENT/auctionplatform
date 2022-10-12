class CommoditiesController < ApplicationController
    def index
        commodities = Commodity.all
        render json: commodities,include: :bidders
    end
end
