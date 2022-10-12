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
        bidder.update(bidder_params)
        render json: bidder,status: :bidder
    end
    bidder = find_bidder
    bidder.destroy
    head :no_content
end
