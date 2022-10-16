class CommoditiesController < ApplicationController
    #  before_action :authorize
    #  skip_before_action :index
    def index
    commodities = Commodity.all
    render json: commodities
    end
    def create
        commodity = Commodity.create!(commodity_params)
        render json: commodity, status: :created
    end
    def show
        commodity = find_commodity
        render json: commodity

    end

    def destroy
    commodity = find_commodity
    commodity.destroy
    head :no_content
    end

    private
    def commodity_params
        params.permit(:name,:category,:bid_price,:image_url,:description,:email_of_auctioneir)
    end
    def find_commodity
        Commodity.find(params[:id])
    end
    def authorize
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  end
end
