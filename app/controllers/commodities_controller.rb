class CommoditiesController < ApplicationController
    def index
        commodities = Commodity.all
        render json :commodities
    end
end
