class CommoditiesController < ApplicationController
    def index
        commodities = Commodity.all
        render json: commodities,include: :bidders
    end
    def create
        commodity = Commodity.create(commodity_params)
        render json: commodity,status: :created
    end

    private
    def commodity_params
        params.permit(:name,:category,:bid_price,:image_url,:description,:email_of_auctioneir)
    end
end
