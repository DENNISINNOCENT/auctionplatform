class CommoditiesController < ApplicationController
    def index
        commodities = Commodity.all
        render json: commodities,include: :bidders
    end
    def create
        commodity = Commodity.create!(commodity_params)
        render json: commodity,status: :created
    end
    def show
        commodity =find_by
        render json: commodity

    end

    def destroy
    commodity = find_by
    commodity.destroy
    head :no_content
    end

    private
    def commodity_params
        params.permit(:name,:category,:bid_price,:image_url,:description,:email_of_auctioneir)
    end
    def find_by
        Commodity.find(params[:id])
    end
end
