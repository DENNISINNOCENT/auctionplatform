class BiddersController < ApplicationController
    def index
        bidders = Bidder.all
        render json: bidders
    end
end
