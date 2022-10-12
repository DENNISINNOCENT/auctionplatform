class CommoditiesController < ApplicationController
    def index
        commodities = Commodity.all
        render json: commodities,includes: bidders
    end
end
