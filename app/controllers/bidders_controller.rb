class BiddersController < ApplicationController
    def index
        bidders = Bidder.all
        render json: bidders
    end
    def create
    bidder =Bidder.create(bidder_params)
    render json: bidder, status: :created
    end

    def update
        bidder =find_bidder
        bidder.update!(bidder_params)
        render json: bidder,status: :created
    end
    def destroy
    bidder = find_bidder
    bidder.destroy
    head :no_content
    end
    def show
        bidder = find_bidder
        render json: bidder
    end
    private
    def find_bidder
        Bidder.find(params[:id])
    end

    def bidder_params
        params.permit(:name,:email,:bidding_price,:commodity_id,:comment_id)
    end

end
